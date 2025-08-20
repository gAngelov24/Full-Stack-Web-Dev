const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs');
const YEAR = '2025';
const SEMESTER = 'fall';
const OUTPUT_FILE = 'courses.json';
const REQUEST_TIMEOUT_MS = 30000; // Wait up to 30 seconds for a response before giving up.
const MAX_RETRIES = 3;            // If a request fails, try it again up to 3 times.
const RETRY_DELAY_MS = 300000;      // Wait 1 second between retries.
const REQ_DELAY_MS = 100;
let now = new Date(Date.now());

const API_BASE_URL = `https://courses.illinois.edu/cisapp/explorer/schedule/${YEAR}/${SEMESTER}`;

const parser = new xml2js.Parser({
    explicitArray: false,
    mergeAttrs: true
});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(url) {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            await delay(REQ_DELAY_MS);
            return await axios.get(url, { timeout: REQUEST_TIMEOUT_MS });
        } catch (error) {
            let errorDetails = `Attempt ${i + 1} failed for ${url}. Reason: ${error.message}.`
            if (error.response) {
                errorDetails += ` Server responded with Status: ${error.response.status} ${error.response.statusText}.`;
            } 
            // Check if the error is a request timeout or connection error
            else if (error.request) {
                errorDetails += ` No response received. Error Code: ${error.code}.`;
            }
            
            console.warn(`   - ${errorDetails} Retrying in ${RETRY_DELAY_MS}ms...`);
            await delay(RETRY_DELAY_MS);
        }
    }
    // If all retries fail, throw an error to be caught by the main loop.
    throw new Error(`Failed to fetch ${url} after ${MAX_RETRIES} attempts.`);
}

async function fetchAllCourseData() {
    console.log("Starting robust course data fetch...");
    let allCourses = {};

    // --- Progress Loading ---
    try {
        if (fs.existsSync(OUTPUT_FILE)) {
            console.log("Existing courses.json found. Loading progress...");
            const existingData = fs.readFileSync(OUTPUT_FILE);
            allCourses = JSON.parse(existingData);
            console.log(`Loaded ${Object.keys(allCourses).length} courses.`);
        }
    } catch (e) {
        console.warn("Could not parse existing courses.json. Starting fresh.");
        allCourses = {};
    }

    try {
        console.log("Fetching all subjects...");
        const subjectsResponse = await fetchWithRetry(`${API_BASE_URL}.xml`);
        const subjectsData = await parser.parseStringPromise(subjectsResponse.data);

        if (!subjectsData['ns2:term'] || !subjectsData['ns2:term'].subjects) {
            console.error(`Error: Could not parse subjects list.`);
            return;
        }

        const subjects = subjectsData['ns2:term'].subjects.subject;
        console.log(`Found ${subjects.length} subjects.`);

        for (const [index, subject] of subjects.entries()) {
            const subjectId = subject.id;
            
            /*
            if (allCourses[`${subjectId} 100`] || allCourses[`${subjectId} 101`]) {
                console.log(`[${index + 1}/${subjects.length}] Subject ${subjectId} already processed. Skipping.`);
                continue;
            }
            */
            
            console.log(`[${index + 1}/${subjects.length}] Processing subject ${subjectId}... ${Date.now() / 1000}`);

            try {
                const coursesResponse = await fetchWithRetry(`${API_BASE_URL}/${subjectId}.xml`);
                const coursesData = await parser.parseStringPromise(coursesResponse.data);

                if (!coursesData['ns2:subject']?.courses?.course) continue;
                
                let courses = coursesData['ns2:subject'].courses.course;
                if (!Array.isArray(courses)) courses = [courses];

                for (const course of courses) {
                    const courseCode = `${subjectId} ${course.id}`;
                    try {
                        const detailResponse = await fetchWithRetry(`${API_BASE_URL}/${subjectId}/${course.id}.xml`);
                        const detailData = await parser.parseStringPromise(detailResponse.data);
                        
                        allCourses[courseCode] = {
                            course_code: courseCode,
                            course_name: detailData['ns2:course'].label,
                            credit_hours: detailData['ns2:course'].creditHours || "Arranged",
                            prerequisites: detailData['ns2:course'].courseSectionInformation?.replace(/<[^>]*>?/gm, '') || "None",
                            description: detailData['ns2:course'].description || ""
                        };
                    } catch (e) {
                        console.error(`   - Failed to fetch details for ${courseCode}. Skipping course. Error: ${e.message}`);
                    }
                }

                // --- Progress Saving ---
                // After successfully processing all courses in a subject, save the entire dataset.
                console.log(`   - Finished ${subjectId}. Saving progress...`);
                fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allCourses, null, 4));

            } catch (e) {
                 console.error(` - CRITICAL ERROR fetching course list for ${subjectId}. Skipping subject. Error: ${e.message}`);
            }
        }

        console.log(`\n✅ Success! Final file contains ${Object.keys(allCourses).length} courses.`);

    } catch (error) {
        console.error("A fatal error occurred during the script:", error.message);
    }
    console.log("Script finished.");
}

fetchAllCourseData();