const majors = [
    "Accountancy",
    "Accountancy + Data Science",
    "ACES Undeclared",
    "Acting",
    "Actuarial Science",
    "Advertising",
    "Aerospace Engineering",
    "African American Studies",
    "Agri-Accounting",
    "Agribusiness, Markets & Management",
    "Agricultural & Biological Engineering, BS",
    "Agricultural & Biological Engineering (ENG)",
    "Agricultural & Consumer Economics, BS",
    "Agricultural Communications",
    "Agricultural Education",
    "Agricultural Leadership, Education, & Communications, BS",
    "Agronomy",
    "Animal Sciences, BS",
    "Anthropology, BALAS",
    "Architectural Studies",
    "Art and Art History",
    "Art Education (K-12)",
    "Art Undeclared",
    "Arts and Entertainment Technology",
    "Asian American Studies",
    "Astronomy",
    "Astronomy + Data Science",
    "Astrophysics",
    "Atmospheric Sciences",
    "Biochemistry",
    "Bioengineering",
    "Biology",
    "Brain and Cognitive Science",
    "Business + Data Science",
    "Business Undeclared",
    "Chemical Engineering, BS",
    "Chemistry, BS",
    "Civil Engineering",
    "Classics, BALAS",
    "Communication",
    "Community Health, BS",
    "Comparative & World Literature, BALAS",
    "Computer Engineering",
    "Computer Science",
    "Computer Science + Advertising",
    "Computer Science + Animal Sciences",
    "Computer Science + Anthropology",
    "Computer Science + Astronomy",
    "Computer Science + Bioengineering",
    "Computer Science + Chemistry",
    "Computer Science + Crop Sciences",
    "Computer Science + Economics",
    "Computer Science + Education, BS",
    "Computer Science + Geography & Geographic Information Science",
    "Computer Science + Linguistics",
    "Computer Science + Music",
    "Computer Science + Philosophy",
    "Computer Science + Physics",
    "Consumer Economics & Finance",
    "Costume Design and Technology",
    "Creative Writing",
    "Crop Sciences, BS",
    "Dance (BA)",
    "Dance (BFA)",
    "Dance, BA and Kinesiology, BS (Dual Degree Program)",
    "Dietetics and Nutrition",
    "Early Childhood Education, BS",
    "Earth, Society, & Environmental Sustainability, BALAS",
    "East Asian Languages and Cultures",
    "Econometrics and Quantitative Economics",
    "Economics",
    "Electrical Engineering",
    "Elementary Education (Grades 1-6)",
    "Engineering Mechanics",
    "Engineering Technology & Management for Agricultural Systems, BS",
    "Engineering Undeclared",
    "English, BALAS",
    "Environmental Economics & Policy",
    "Environmental Engineering",
    "Farm Management",
    "Finance",
    "Finance + Data Science",
    "Finance in Agri-Business",
    "Financial Planning",
    "Food Science",
    "French, BALAS",
    "Gender and Women's Studies",
    "Geography & Geographic Information Science, BALAS",
    "Geography & Geographic Information Science, BSLAS",
    "Geology, BS",
    "Geology, BSLAS",
    "Germanic Studies, BALAS",
    "Global Studies",
    "Graphic Design",
    "Interdisciplinary Health Sciences, BS",
    "History, BALAS",
    "History of Art",
    "Hospitality Management",
    "Human Development and Family Studies",
    "Industrial Design",
    "Industrial Engineering",
    "Information Sciences",
    "Information Sciences + Data Science",
    "Information Systems",
    "Integrative Biology, BSLAS",
    "Interdisciplinary Studies, BALAS",
    "Italian",
    "Journalism",
    "Kinesiology, BS",
    "Landscape Architecture",
    "LAS Undeclared",
    "Latin American Studies",
    "Latina/Latino Studies",
    "Learning & Education Studies, BS",
    "Lighting Design and Technology",
    "Linguistics",
    "Linguistics and Teaching English as a Second Language",
    "Lyric Theatre, BMA",
    "Management",
    "Marketing",
    "Materials Science and Engineering",
    "Mathematics, BSLAS",
    "Mathematics and Computer Science",
    "Mechanical Engineering",
    "Media and Cinema Studies",
    "Middle Grades Education, BS",
    "Molecular & Cellular Biology, BSLAS",
    "Music, BA",
    "Music Composition",
    "Music Education, BME",
    "Music Instrumental Performance",
    "Music Jazz Performance",
    "Music Open Studies",
    "Music Voice Performance",
    "Musicology",
    "Natural Resources & Environmental Sciences, BS",
    "Neural Engineering",
    "Neuroscience",
    "Nuclear, Plasma, & Radiological Engineering, BS",
    "Nutrition and Health",
    "Operations Management",
    "Organizational and Community Leadership",
    "Philosophy",
    "Physics",
    "Plant Biotechnology",
    "Policy, International Trade & Development",
    "Political Science, BALAS",
    "Portuguese",
    "Psychology, BSLAS",
    "Public Policy & Law",
    "Recreation, Sport & Tourism, BS",
    "Religion",
    "Russian, East European, and Eurasian Studies",
    "Scenic Design",
    "Scenic Technology",
    "Secondary Education, BS",
    "Secondary Education: Chemistry",
    "Secondary Education: Earth Science",
    "Secondary Education: English",
    "Secondary Education: Mathematics (Grades 9-12)",
    "Secondary Education: Mathematics (LAS)",
    "Secondary Education: Physics",
    "Secondary Education: Social Studies",
    "Slavic Studies, BALAS",
    "Social Work",
    "Sociology",
    "Sound Design and Technology",
    "Spanish",
    "Special Education",
    "Speech & Hearing Science, BS",
    "Stage Management",
    "Statistics",
    "Statistics and Computer Science",
    "Strategy, Innovation and Entrepreneurship",
    "Studio Art (BA)",
    "Studio Art, BFASA",
    "Supply Chain Management",
    "Sustainability in Food & Environmental Systems",
    "Sustainable Design",
    "Systems Engineering and Design",
    "Teacher Education: French (K-12)",
    "Teacher Education: German (K-12)",
    "Teacher Education: Kinesiology - Physical Education (K-12)",
    "Teacher Education: Spanish (K-12)",
    "Theatre, BFA",
    "Undeclared",
    "Urban Studies & Planning, BA"
];

const majorToConcentrations = {
    "Agricultural & Biological Engineering, BS": [
        "Bioprocess Engineering and Industrial Biotechnology",
        "Off-Highway Vehicle and Equipment Engineering",
        "Renewable Energy Systems Engineering",
        "Soil and Water Resources Engineering",
        "Sustainable Ecological and Environmental Systems Engineering",
        "Synthetic Biological Engineering"
    ],
    "Agricultural & Consumer Economics, BS": [
        "Agri-Accounting",
        "Agribusiness Markets & Management",
        "Consumer Economics & Finance",
        "Environmental Economics & Policy",
        "Farm Management",
        "Finance in Agribusiness",
        "Financial Planning",
        "Policy, International Trade & Development",
        "Public Policy & Law"
    ],
    "Agricultural Leadership, Education, & Communications, BS": [
        "Agricultural Communications",
        "Agricultural Education",
        "Organizational & Community Leadership"
    ],
    "Animal Sciences, BS": [
        "Companion Animal & Equine Science",
        "Food Animal Production & Management",
        "Science, Pre-Veterinary & Medical"
    ],
    "Anthropology, BALAS": [
        "Archaeology",
        "Biological Anthropology",
        "Human Evolutionary Biology",
        "Sociocultural & Linguistic Anthropology"
    ],
    "Chemical Engineering, BS": [
        "Biomolecular Engineering"
    ],
    "Chemistry, BS": [
        "Environmental Chemistry"
    ],
    "Classics, BALAS": [
        "Classical Civilizations",
        "Classical Languages"
    ],
    "Community Health, BS": [
        "Health Education",
        "Health Planning & Administration",
        "Rehabilitation & Disability Studies"
    ],
    "Comparative & World Literature, BALAS": [
        "Comparative Literature",
        "World Literature"
    ],
    "Computer Science + Education, BS": [
        "Learning Sciences",
        "Secondary Education"
    ],
    "Crop Sciences, BS": [
        "Agroecology",
        "Crop Agribusiness",
        "Horticultural Food Systems"
    ],
    "Early Childhood Education, BS": [
        "Professional Education - Licensure",
        "Professional Education - Non-Licensure"
    ],
    "Earth, Society, & Environmental Sustainability, BSLAS": [
        "Science of the Earth System (SES)",
        "Society and the Environment"
    ],
    "Engineering Technology & Management for Agricultural Systems, BS": [
        "Agricultural Production & Processing",
        "Construction Management",
        "Digital & Precision Agriculture",
        "Energy & the Environment"
    ],
    "English, BALAS": [
        "English",
        "English Teaching",
        "Topics in English"
    ],
    "French, BALAS": [
        "French Studies"
    ],
    "Geography & Geographic Information Science, BALAS": [
        "General Geography",
        "Human Geography"
    ],
    "Geography & Geographic Information Science, BSLAS": [
        "Geographic Information Science",
        "Physical Geography"
    ],
    "Geology, BS": [
        "Environmental Geology (Specialized Curriculum)",
        "Geophysics"
    ],
    "Geology, BSLAS": [
        "Earth & Environmental Sciences",
        "Earth Science Teaching"
    ],
    "Germanic Studies, BALAS": [
        "German Business & Commercial Studies",
        "German Studies",
        "Scandinavian Studies"
    ],
    "History, BALAS": [
        "History Teaching"
    ],
    "Integrative Biology, BSLAS": [
        "Integrative Biology Honors"
    ],
    "Interdisciplinary Health Sciences, BS": [
        "Health & Aging",
        "Health Behavior Change",
        "Health Diversity",
        "Health Technology"
    ],
    "Interdisciplinary Studies, BALAS": [
        "Jewish Studies",
        "Medieval Studies"
    ], 
    "Kinesiology, BS": [
        "Teacher Education (K-12)"
    ],
    "Learning & Education Studies, BS": [
        "Educational Equality & Cultural Understanding",
        "Educational Technology",
        "Workplace Training & Development"
    ],
    "Lyric Theatre, BMA": [
        "Creative",
        "Performance"
    ],
    "Mathematics, BSLAS": [
        "Applied Mathematics",
        "Data Optimization",
        "Math Doctoral Preparation",
        "Teaching of Mathematics"
    ],
    "Middle Grades Education, BS": [
        "Literacy",
        "Mathematics",
        "Science",
        "Social Science"
    ],
    "Molecular & Cellular Biology, BSLAS": [
        "Honors Concentration"
    ],
    "Music Education, BME": [
        "Choral Music",
        "General Music",
        "Instrumental Music",
        "Technology"
    ],
    "Music, BA": [
        "Music Technology"
    ],
    "Natural Resources & Environmental Sciences, BS": [
        "Ecosystem Stewardship & Restoration Ecology",
        "Environmental Science & Management",
        "Environmental Social Sciences",
        "Fish, Wildlife & Conservation Biology"
    ],
    "Nuclear, Plasma, & Radiological Engineering, BS": [
        "Plasma & Fusion Science & Engineering",
        "Power, Safety & Environment",
        "Radiological, Medical & Instrumentation Applications"
    ],
    "Political Science, BALAS": [
        "Citizen Politics",
        "Civic Leadership",
        "General Political Science",
        "International Relations",
        "Law & Power",
        "Public Policy & Democratic Institution",
        "World Politics"
    ],
    "Psychology, BSLAS": [
        "Behavioral Neuroscience",
        "Clinical/Community Psychology",
        "Cognitive Neuroscience",
        "Cognitive Psychology",
        "Developmental Psychology",
        "Diversity Science",
        "Intradisciplinary Psychology",
        "Organizational Psychology",
        "Personality Psychology",
        "Social Psychology"
    ],
    "Recreation, Sport & Tourism, BS": [
        "Recreation Management",
        "Sports Management",
        "Tourism Management"
    ],
    "Secondary Education, BS": [
        "Mathematics"
    ],
    "Slavic Studies, BALAS": [
        "Czech Studies",
        "Polish Studies",
        "Russian Language, Literature, & Culture",
        "South Slavic Studies",
        "Ukranian Studies"
    ],
    "Speech & Hearing Science, BS": [
        "Audiology",
        "Cultural-Linguistic Diversity",
        "Neuroscience of Communication",
        "Speech Language Pathology"
    ],
    "Studio Art, BFASA": [
        "Fashion",
        "Illustration",
        "Interdisciplinary Practice",
        "New Media",
        "Painting",
        "Photography",
        "Printmaking",
        "Sculpture"
    ],
    "Theatre, BFA": [
        "Acting",
        "Arts & Entertainment Technology",
        "Costume Design & Technology",
        "Lighting Design & Technology",
        "Scenic Design",
        "Scenic Technology",
        "Sound Design & Technology",
        "Stage Management",
        "Theatre Studies"
    ],
    "Urban Studies & Planning, BA": [
        "Global Cities",
        "Policy & Planning",
        "Social Justice",
        "Sustainability"
    ]
};

function populateDropdown(dropdown) {
    majors.forEach(major => {
        const option = document.createElement('option');
        option.value = major;
        option.textContent = major;
        dropdown.appendChild(option);
    });
}

const majorSelectorsDiv = document.getElementById('major-selectors');
const addMajorBtn = document.getElementById('add-major-btn');

// Populate the first dropdown
populateDropdown(document.getElementById('major1'));

addMajorBtn.addEventListener('click', function () {
    const dropdowns = majorSelectorsDiv.querySelectorAll('.major-dropdown');
    if (dropdowns.length < 2) {
        const newSelect = document.createElement('select');
        newSelect.className = 'major-dropdown';
        newSelect.id = `major${dropdowns.length + 1}`;
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '--Choose a major--';
        newSelect.appendChild(defaultOption);
        populateDropdown(newSelect);
        majorSelectorsDiv.appendChild(newSelect);
        if (majorSelectorsDiv.querySelectorAll('.major-dropdown').length === 2) {
            addMajorBtn.disabled = true;
        }
    }
});

const concentrationContainer = document.getElementById('concentration-container');
const concentrationSelect = document.getElementById('concentration');

// Listen for changes on all major dropdowns
function handleMajorChange(e) {
    const selectedMajor = e.target.value;
    if (majorToConcentrations[selectedMajor]) {
        // Show and populate the concentration dropdown
        concentrationContainer.style.display = 'block';
        // Clear previous options
        concentrationSelect.innerHTML = '<option value="">--Choose a concentration--</option>';
        majorToConcentrations[selectedMajor].forEach(conc => {
            const option = document.createElement('option');
            option.value = conc;
            option.textContent = conc;
            concentrationSelect.appendChild(option);
        });
    } else {
        // Hide if no concentrations
        concentrationContainer.style.display = 'none';
        concentrationSelect.innerHTML = '<option value="">--Choose a concentration--</option>';
    }
}

// Attach the event listener to all current and future major dropdowns
function attachMajorListeners() {
    document.querySelectorAll('.major-dropdown').forEach(dropdown => {
        dropdown.removeEventListener('change', handleMajorChange); // Prevent duplicate listeners
        dropdown.addEventListener('change', handleMajorChange);
    });
}

// Call after populating or adding new major dropdowns
attachMajorListeners();
