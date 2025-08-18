let courses = {};
        let currentPlan = {};
        let selectedSemester = null;
        let planGenerated = false;

        // Hardcoded majors and minors as requested
        const majors = {
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
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.course-search')) {
                    document.getElementById('search-results').style.display = 'none';
                    document.getElementById('modal-search-results').style.display = 'none';
                }
            });
        }

        function generatePlan() {
            const major = document.getElementById('major-select').value;
            const planLength = document.getElementById('plan-length').value;
            
            if (!major) {
                alert('Please select a major first!');
                return;
            }

            currentPlan = {};
            const grid = document.getElementById('planner-grid');
            grid.innerHTML = '';

            for (let year = 1; year <= parseInt(planLength); year++) {
                for (let semester of ['Fall', 'Spring']) {
                    const semesterKey = `${semester} ${year}`;
                    currentPlan[semesterKey] = [];
                    createSemesterElement(semesterKey);
                }
            }

            document.getElementById('course-search').style.display = 'block';
            document.getElementById('summary-stats').style.display = 'grid';
            document.getElementById('validation-panel').style.display = 'block';
            
            planGenerated = true;
            updateSummary();
            validateRequirements();
        }

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
        }

        function openModal(semesterKey) {
            selectedSemester = semesterKey;
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
            for (let semesterKey of Object.keys(currentPlan)) {
                if (currentPlan[semesterKey].length < 6) {
                    selectedSemester = semesterKey;
                    addCourseWithValidation(courseCode);
                    document.getElementById('search-input').value = '';
                    document.getElementById('search-results').style.display = 'none';
                    return;
                }
            }
            alert('All semesters are full! Please remove a course first.');
        }

        function addCourse(courseCode) {
            if (!selectedSemester) return;
            
            if (currentPlan[selectedSemester].length >= 6) {
                alert('This semester is full!');
                return;
            }
            
            currentPlan[selectedSemester].push(courseCode);
            updateSemesterDisplay(selectedSemester);
            updateSummary();
            validateRequirements();
        }

        function removeCourse(semesterKey, courseIndex) {
            currentPlan[semesterKey].splice(courseIndex, 1);
            updateSemesterDisplay(semesterKey);
            updateSummary();
            validateRequirements();
        }

        function updateSemesterDisplay(semesterKey) {
            const semesterIndex = Object.keys(currentPlan).indexOf(semesterKey);
            const semesterDiv = document.querySelectorAll('.semester')[semesterIndex];
            const slots = semesterDiv.querySelectorAll('.course-slot');
            
            currentPlan[semesterKey].forEach((courseCode, index) => {
                if (slots[index]) {
                    const course = courses[courseCode];
                    slots[index].innerHTML = `
                        <div class="course-info">
                            <div class="course-code">${courseCode}</div>
                            <div class="course-name">${course.name}</div>
                        </div>
                        <div class="course-credits">${course.credits}</div>
                        <button class="remove-course" onclick="removeCourse('${semesterKey}', ${index})">&times;</button>
                    `;
                    slots[index].className = 'course-slot course-filled';
                }
            });
            
            for (let i = currentPlan[semesterKey].length; i < slots.length; i++) {
                slots[i].innerHTML = '+ Add Course';
                slots[i].className = 'course-slot';
                slots[i].onclick = () => openModal(semesterKey);
            }
        }

        function updateSummary() {
            if (!planGenerated) return;
            
            let totalCredits = 0;
            let majorCredits = 0;
            let genEdCredits = 0;
            let electiveCredits = 0;
            
            const majorName = document.getElementById('major-select').value;
            if (!majorName || !majors[majorName]) return;
            const majorReqs = majors[majorName];
            
            Object.values(currentPlan).flat().forEach(courseCode => {
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
            
            const allCourses = Object.values(currentPlan).flat();
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
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
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

        function checkPrerequisites(courseCode, semesterKey) {
            const course = courses[courseCode];
            if (!course || !course.prerequisites || course.prerequisites.length === 0) {
                return true;
            }
            
            const semesterKeys = Object.keys(currentPlan);
            const currentSemesterIndex = semesterKeys.indexOf(semesterKey);
            const pastCourses = semesterKeys.slice(0, currentSemesterIndex).flatMap(key => currentPlan[key]);
            
            // Check if every prerequisite course is included in the list of past courses
            return course.prerequisites.every(prereq => pastCourses.includes(prereq));
        }

        function addCourseWithValidation(courseCode) {
            if (!selectedSemester) return;
            
            if (currentPlan[selectedSemester].length >= 6) {
                alert('This semester is full!');
                return;
            }
            
            const allCoursesInPlan = Object.values(currentPlan).flat();
            if (allCoursesInPlan.includes(courseCode)) {
                alert('This course is already in your plan!');
                return;
            }
            
            if (!checkPrerequisites(courseCode, selectedSemester)) {
                const course = courses[courseCode];
                const prereqList = course.prerequisites.join(', ');
                const confirmAdd = confirm(`Warning: Prerequisites not met for ${courseCode}.\nRequired: ${prereqList}\n\nAdd anyway?`);
                if (!confirmAdd) {
                    closeModal();
                    return;
                }
            }
            
            addCourse(courseCode);
            closeModal();
        }

        // Load data when the page is ready
        window.addEventListener('DOMContentLoaded', fetchCourseData);

        // Close modal if clicked outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('course-modal');
            if (event.target === modal) {
                closeModal();
            }
        }