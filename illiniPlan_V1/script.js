let courses = {};
let currentPlan = [];
let selectedSemester = null;
let planGenerated = false;

// Hardcoded majors and minors as requested
/*const majors = {
    "Computer Science": {
        required_courses: ["CS 125", "CS 173", "CS 225", "CS 233", "CS 241", "CS 374"],
        math_requirements: ["MATH 220", "MATH 221", "MATH 231"],
        science_requirements: ["PHYS 211", "PHYS 212"],
        general_requirements: ["ENGL 101", "ENGL 102"],
        electives: 12,
        total_credits: 128
    },
    "Electrical Engineering": {
        required_courses: ["ECE 110", "ECE 120", "ECE 210", "ECE 220"],
        math_requirements: ["MATH 220", "MATH 221", "MATH 231"],
        science_requirements: ["PHYS 211", "PHYS 212", "CHEM 102", "CHEM 103"],
        general_requirements: ["ENGL 101", "ENGL 102"],
        electives: 15,
        total_credits: 128
    },
    "Mathematics": {
        required_courses: ["MATH 220", "MATH 221", "MATH 231", "MATH 241", "MATH 347", "MATH 348"],
        math_requirements: [],
        science_requirements: ["PHYS 211", "PHYS 212"],
        general_requirements: ["ENGL 101", "ENGL 102"],
        electives: 18,
        total_credits: 120
    }
};

const minors = {
    "Mathematics": {
        required_courses: ["MATH 220", "MATH 221", "MATH 231"],
        electives: 6,
        total_credits: 20
    },
    "Business": {
        required_courses: ["ECON 102", "ECON 103", "ACCY 201"],
        electives: 9,
        total_credits: 18
    },
    "Statistics": {
        required_courses: ["STAT 200", "STAT 400", "IE 300"],
        electives: 6,
        total_credits: 18
    }
};
*/
// Fetch and transform course data from courses.JSON
async function fetchCourseData() {
    try {
        const response = await fetch('courses.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawCourseData = await response.json();

        // --- Data Transformation Step ---
        // Convert the fetched JSON object into the format the application expects
        const formattedCourses = {};
        for (const courseCode in rawCourseData) {
            if (rawCourseData.hasOwnProperty(courseCode)) {
                const rawCourse = rawCourseData[courseCode];

                let prereqs = [];
                if (rawCourse.prerequisites && rawCourse.prerequisites.toLowerCase() !== 'none') {
                    // This regex finds course codes like "CS 125" from a string
                    const prereqCodes = rawCourse.prerequisites.match(/[A-Z]{2,4}\s\d{3}/g);
                    if (prereqCodes) {
                        prereqs = prereqCodes;
                    }
                }

                formattedCourses[courseCode] = {
                    name: rawCourse.course_name,
                    credits: parseInt(rawCourse.credit_hours) || 0, // Extracts the first number
                    prerequisites: prereqs
                };
            }
        }
        courses = formattedCourses;
        // --- End of Transformation ---

        init(); // Initialize the app after data is loaded and formatted
    } catch (error) {
        console.error('Error fetching or processing course data:', error);
        alert('Could not load course data. Please ensure the courses.JSON file is in the correct directory and is a valid JSON.');
    }
}

// Initialize the application
function init() {
    populateMajors();
    populateMinors();
    setupEventListeners();
}

function populateMajors() {
    const majorSelect = document.getElementById('major-select');
    majorSelect.innerHTML = '<option value="">Select your major</option>';
    Object.keys(majors).forEach(major => {
        const option = document.createElement('option');
        option.value = major;
        option.textContent = major;
        majorSelect.appendChild(option);
    });
}

function populateMinors() {
    const minorSelect = document.getElementById('minor-select');
    minorSelect.innerHTML = '<option value="">Select a minor</option>';
    Object.keys(minors).forEach(minor => {
        const option = document.createElement('option');
        option.value = minor;
        option.textContent = minor;
        minorSelect.appendChild(option);
    });
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    const modalSearch = document.getElementById('modal-search');

    searchInput.addEventListener('input', handleSearch);
    modalSearch.addEventListener('input', handleModalSearch);

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.course-search')) {
            document.getElementById('search-results').style.display = 'none';
            document.getElementById('modal-search-results').style.display = 'none';
        }
    });
}

function generatePlan() {
    const major = document.getElementById('major-select').value;
    const planLength = parseInt(document.getElementById('plan-length').value);

    if (!major) {
        alert('Please select a major first!');
        return;
    }

    currentPlan = [];
    for (let i = 1; i <= planLength; i++) {
        currentPlan.push({ year: i, term: 'Fall', courses: [] });
        currentPlan.push({ year: i, term: 'Spring', courses: [] });
        currentPlan.push({ year: i, term: 'Summer', courses: [] });
    }
    renderPlannerGrid();
    document.getElementById('course-search').style.display = 'block';
    document.getElementById('summary-stats').style.display = 'grid';
    document.getElementById('validation-panel').style.display = 'block';

    planGenerated = true;
    updateSummary();
    validateRequirements();
}
/*
function createSemesterElement(semesterKey) {
    const grid = document.getElementById('planner-grid');
    const semesterDiv = document.createElement('div');
    semesterDiv.className = 'semester';
    semesterDiv.innerHTML = `
                <div class="semester-header">${semesterKey}</div>
                <div class="course-slot" onclick="openModal('${semesterKey}')">+ Add Course</div>
                <div class="course-slot" onclick="openModal('${semesterKey}')">+ Add Course</div>
                <div class="course-slot" onclick="openModal('${semesterKey}')">+ Add Course</div>
                <div class="course-slot" onclick="openModal('${semesterKey}')">+ Add Course</div>
                <div class="course-slot" onclick="openModal('${semesterKey}')">+ Add Course</div>
                <div class="course-slot" onclick="openModal('${semesterKey}')">+ Add Course</div>
            `;
    grid.appendChild(semesterDiv);
}*/

function renderPlannerGrid() {
    const grid = document.getElementById('planner-grid');
    grid.innerHTML = '';

    currentPlan.forEach(
        (semester, index) => {
            const semesterKey = `${semester.term} ${semester.year}`;
            const semesterDiv = document.createElement('div');
            semesterDiv.className = 'semester';

            semesterDiv.innerHTML = `
                <div class="semester-header">
                    <span>${semesterKey}</span>
                    <div class="semester-controls">
                        <button class="semester-btn remove-btn" title="Remove Semester" onclick="removeSemester(${index})">&ndash;</button>
                        <button class="semester-btn add-btn" title="Add Semester" onclick="addSemester(${index})">+</button>
                    </div>
                </div>
            `;

            semester.courses.forEach(
                (courseCode, courseIndex) => {
                    const course = courses[courseCode];
                    const slotDiv = document.createElement('div');
                    slotDiv.className = 'course-slot course-filled';
                    slotDiv.innerHTML = `
                    <div class="course-info">
                        <div class="course-code">${courseCode}</div>
                        <div class="course-name">${course.name}</div>
                    </div>
                    <div class="course-credits">${course.credits}</div>
                    <button class="remove-course" onclick="removeCourse(${index}, ${courseIndex})">&times;</button>
                `; //// course.credits might need to be changed ////
                    semesterDiv.appendChild(slotDiv);
                });
            for (let i = semester.courses.length; i < 6; i++) {
                const slotDiv = document.createElement('div');
                slotDiv.className = 'course-slot';
                slotDiv.innerHTML = `+ Add Course`;
                slotDiv.onclick = () => openModal(index);
                semesterDiv.appendChild(slotDiv);
            }
            grid.appendChild(semesterDiv);
        }
    );
}

function addSemester(index) {
    const currentSemester = currentPlan[index];
    let newYear = currentSemester.year;
    let newTerm = 'Spring';

    if (currentSemester.term === 'Spring') {
        newTerm = 'Summer';
        newYear = currentSemester.year;
    }
    if (currentSemester.term === 'Summer') {
        newTerm = 'Fall';
        newYear = currentSemester.year + 1;
    }
    if (currentSemester.term === 'Fall') {
        newTerm = 'Spring';
        newYear = currentSemester.year;
    }
    const newSemester = { year: newYear, term: newTerm, courses: [] };
    currentPlan.splice(index + 1, 0, newSemester);

    renderPlannerGrid();
    updateSummary();
    validateRequirements();
}

function removeSemester(index) {
    if (currentPlan.length <= 1) {
        alert('You cannot remove the last semester!');
        return;
    }
    if (confirm(`Are you sure you want to remove ${currentPlan[index].term} ${currentPlan[index].year}?`)) {
        currentPlan.splice(index, 1);

        renderPlannerGrid();
        updateSummary();
        validateRequirements();
    }
}

function openModal(index) {
    selectedSemesterIndex = index;
    document.getElementById('course-modal').style.display = 'block';
    document.getElementById('modal-search').focus();
}

function closeModal() {
    document.getElementById('course-modal').style.display = 'none';
    document.getElementById('modal-search').value = '';
    document.getElementById('modal-search-results').innerHTML = '';
}

function searchCourses(query) {
    if (query.length === 0) {
        return [];
    }
    return Object.keys(courses).filter(courseCode =>
        courseCode.toLowerCase().includes(query) ||
        (courses[courseCode].name && courses[courseCode].name.toLowerCase().includes(query))
    ).slice(0, 10);
}

function displaySearchResults(results, resultsDiv, clickHandler) {
    if (results.length > 0) {
        resultsDiv.innerHTML = results.map(courseCode => {
            const course = courses[courseCode];
            if (!course) return '';
            return `
                        <div class="search-result-item" onclick="${clickHandler}('${courseCode}')">
                            <strong>${courseCode}</strong> - ${course.name} (${course.credits} credits)
                        </div>
                    `;
        }).join('');
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.style.display = 'none';
    }
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const results = searchCourses(query);
    displaySearchResults(results, document.getElementById('search-results'), 'quickAddCourse');
}

function handleModalSearch(event) {
    const query = event.target.value.toLowerCase();
    const results = searchCourses(query);
    displaySearchResults(results, document.getElementById('modal-search-results'), 'addCourseWithValidation');
}

function quickAddCourse(courseCode) {
    for (let i = 0; i < currentPlan.length; i++) {
        if (currentPlan[i].courses.length < 6) {
            addCourse(courseCode, i);
            document.getElementById('search-input').value = '';
            document.getElementById('search-results').style.display = 'none';
            return;
        }
    }
    alert('All semesters are full! Please remove a course first.');
}

function addCourse(courseCode, semesterIndex) {
    const targetIndex = (semesterIndex !== undefined) ? semesterIndex : selectedSemesterIndex;
    if (targetIndex === null) return;
    if (currentPlan[targetIndex].courses.length >= 6) {
        alert('This semester is full');
        return;
    }
    currentPlan[targetIndex].courses.push(courseCode);

    renderPlannerGrid();
    updateSummary();
    validateRequirements();
    closeModal();
}

function removeCourse(semesterIndex, courseIndex) {
    currentPlan[semesterIndex].courses.splice(courseIndex, 1);
    renderPlannerGrid();
    updateSummary();
    validateRequirements();
}


/////       THIS FUNCTION NEEDS TO BE UPDATED       /////
function updateSummary() {
    if (!planGenerated) return;

    let totalCredits = 0;
    let majorCredits = 0;
    let genEdCredits = 0;
    let electiveCredits = 0;

    const majorName = document.getElementById('major-select').value;
    if (!majorName || !majors[majorName]) return;
    const majorReqs = majors[majorName];

    const allPlannedCourses = currentPlan.flatMap(semester => semester.courses);
    
    allPlannedCourses.forEach(courseCode => {
        const course = courses[courseCode];
        if (course) {
            totalCredits += course.credits;

            if (majorReqs.required_courses.includes(courseCode) ||
                majorReqs.math_requirements.includes(courseCode) ||
                majorReqs.science_requirements.includes(courseCode)) {
                majorCredits += course.credits;
            } else if (majorReqs.general_requirements.includes(courseCode)) {
                genEdCredits += course.credits;
            } else {
                electiveCredits += course.credits;
            }
        }
    });

    document.getElementById('total-credits').textContent = totalCredits;
    document.getElementById('major-credits').textContent = majorCredits;
    document.getElementById('gen-ed-credits').textContent = genEdCredits;
    document.getElementById('elective-credits').textContent = electiveCredits;
}

function validateRequirements() {
    if (!planGenerated) return;

    const majorName = document.getElementById('major-select').value;
    if (!majorName || !majors[majorName]) return;

    const minorName = document.getElementById('minor-select').value;
    const resultsDiv = document.getElementById('validation-results');

    const allCourses = currentPlan.flatMap(semester => semester.courses);
    const majorReqs = majors[majorName];
    let validationHTML = '';

    validationHTML += '<div class="requirement-group"><h3>Major Requirements</h3>';

    // Required courses
    validationHTML += '<div class="requirement-item">';
    validationHTML += '<span>Major Required Courses</span>';
    const completedRequired = majorReqs.required_courses.filter(c => allCourses.includes(c));
    const requiredStatus = completedRequired.length >= majorReqs.required_courses.length ? 'complete' :
        completedRequired.length > 0 ? 'partial' : 'incomplete';
    validationHTML += `<span class="status-badge status-${requiredStatus}">${completedRequired.length}/${majorReqs.required_courses.length}</span>`;
    validationHTML += '</div>';

    // Total credits
    const totalCredits = allCourses.reduce((sum, code) => sum + (courses[code] ? courses[code].credits : 0), 0);
    validationHTML += '<div class="requirement-item">';
    validationHTML += '<span>Total Credits</span>';
    const creditStatus = totalCredits >= majorReqs.total_credits ? 'complete' :
        totalCredits >= majorReqs.total_credits * 0.75 ? 'partial' : 'incomplete';
    validationHTML += `<span class="status-badge status-${creditStatus}">${totalCredits}/${majorReqs.total_credits}</span>`;
    validationHTML += '</div>';

    validationHTML += '</div>';

    if (minorName && minors[minorName]) {
        const minorReqs = minors[minorName];
        validationHTML += '<div class="requirement-group"><h3>Minor Requirements</h3>';

        validationHTML += '<div class="requirement-item">';
        validationHTML += '<span>Required Courses</span>';
        const completedMinorReq = minorReqs.required_courses.filter(c => allCourses.includes(c));
        const minorStatus = completedMinorReq.length >= minorReqs.required_courses.length ? 'complete' : 'incomplete';
        validationHTML += `<span class="status-badge status-${minorStatus}">${completedMinorReq.length}/${minorReqs.required_courses.length}</span>`;
        validationHTML += '</div>';

        validationHTML += '</div>';
    }

    resultsDiv.innerHTML = validationHTML;
}


/////         EXPORT AND IMPORT FUNCTION NEED A CLOSER LOOK       /////
function exportPlan() {
    if (!planGenerated) {
        alert('Please generate a plan first!');
        return;
    }

    const exportData = {
        major: document.getElementById('major-select').value,
        minor: document.getElementById('minor-select').value,
        planLength: document.getElementById('plan-length').value,
        plan: currentPlan,
        timestamp: new Date().toISOString()
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `UIUC_Plan_${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importPlan() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                try {
                    const importData = JSON.parse(e.target.result);

                    document.getElementById('major-select').value = importData.major || '';
                    document.getElementById('minor-select').value = importData.minor || '';
                    document.getElementById('plan-length').value = importData.planLength || '4';

                    currentPlan = importData.plan || {};

                    generatePlan();

                    Object.keys(currentPlan).forEach(semesterKey => {
                        updateSemesterDisplay(semesterKey);
                    });

                    updateSummary();
                    validateRequirements();

                    alert('Plan imported successfully!');
                } catch (error) {
                    alert('Error importing plan. Please check the file format.');
                    console.error('Import error:', error);
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

function checkPrerequisites(courseCode, semesterIndex) {
    const course = courses[courseCode];
    if (!course || !course.prerequisites || course.prerequisites.length === 0) {
        return true;
    }

    const pastCourses = currentPlan.slice(0, semesterIndex).flatMap(sem => sem.courses);
    return course.prerequisites.every(prereq => pastCourses.includes(prereq));
}

function addCourseWithValidation(courseCode) {
    const course = courses[courseCode];
    if (!course || !course.prerequisites || course.prerequisites.length === 0) {
        return true;
    }

    // Get all courses taken in semesters *before* the current one
    const pastCourses = currentPlan.slice(0, semesterIndex).flatMap(sem => sem.courses);

    return course.prerequisites.every(prereq => pastCourses.includes(prereq));
}

function addCourseWithValidation(courseCode) {
    if (selectedSemesterIndex === null) return;

    if (currentPlan[selectedSemesterIndex].courses.length >= 6) {
        alert('This semester is full!');
        return;
    }

    const allCoursesInPlan = currentPlan.flatMap(sem => sem.courses);
    if (allCoursesInPlan.includes(courseCode)) {
        alert('This course is already in your plan!');
        return;
    }

    if (!checkPrerequisites(courseCode, selectedSemesterIndex)) {
        const course = courses[courseCode];
        const prereqList = course.prerequisites.join(', ');
        const confirmAdd = confirm(`Warning: Prerequisites not met for ${courseCode}.\nRequired: ${prereqList}\n\nAdd anyway?`);
        if (!confirmAdd) {
            closeModal();
            return;
        }
    }

    addCourse(courseCode, selectedSemesterIndex);
    closeModal();
}

window.addEventListener('DOMContentLoaded', fetchCourseData);
window.onclick = function (event) {
    const modal = document.getElementById('course-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Load data when the page is ready
window.addEventListener('DOMContentLoaded', fetchCourseData);

// Close modal if clicked outside of it
window.onclick = function (event) {
    const modal = document.getElementById('course-modal');
    if (event.target === modal) {
        closeModal();
    }
}