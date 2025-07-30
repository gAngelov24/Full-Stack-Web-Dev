const minors = [
    "Adult Development",
    "Advertising",
    "African American Studies",
    "African Studies",
    "Aging",
    "American Indian Studies",
    "Animal Sciences",
    "Anthropology",
    "Arabic Studies",
    "Architectural Studies",
    "Art & Design",
    "Art History",
    "Asian American Studies",
    "Astronomy",
    "Atmospheric Sciences",
    "Bioengineering",
    "Biomolecular Engineering",
    "Business Analytics",
    "Business Minor for Non-Business Majors",
    "Chemistry",
    "Child Health & Well-being",
    "Cinema Studies",
    "Civic Leadership",
    "Classical Civilizations",
    "Classical Languages",
    "Communication",
    "Community Based Art Education",
    "Computational Science & Engineering",
    "Computer Science",
    "Creative Writing",
    "Criminology, Law, & Society",
    "Critical Film Production",
    "Crop & Soil Management",
    "Dance",
    "Data Science",
    "Disability Studies",
    "Earth, Society & Environment",
    "East Asian Languages and Cultures",
    "Ecology & Conservation Biology",
    "Economics",
    "Electrical & Computer Engineering",
    "Engineering, International Minor",
    "Engineering Technology and Management for Agricultural Systems",
    "English",
    "English as a Second Language",
    "English as a Second Language, Teacher Education",
    "Environmental Economics & Law",
    "Food & Agribusiness Management",
    "Food & Environmental Systems",
    "Food Science",
    "French",
    "Game Studies & Design",
    "Gender & Women's Studies",
    "Geography & GIS",
    "Geology",
    "German",
    "German Business & Commercial Studies Minor",
    "Global Studies",
    "Global Labor Studies",
    "Global Markets & Society",
    "Health Administration",
    "Health Technology, Interdisciplinary",
    "Hindi Studies",
    "History",
    "Horticulture",
    "Hospitality Management",
    "Industrial and Agricultural Safety and Health",
    "Informatics",
    "Integrative Biology",
    "Interdisciplinary Minor in African American Studies",
    "Interdisciplinary Minor in African Studies",
    "Interdisciplinary Minor in Aging",
    "Interdisciplinary Minor in Asian American Studies",
    "Interdisciplinary Minor in Health Technology",
    "Interdisciplinary Minor in Jewish Culture and Society",
    "Interdisciplinary Minor in Latin American Studies",
    "Interdisciplinary Minor in Medieval Studies",
    "Interdisciplinary Minor in South Asian Studies",
    "Interdisciplinary Minor in the Study of the Islamic World",
    "International Business",
    "International Development Economics",
    "International Minor in Agricultural, Consumer, & Environmental Sciences",
    "International Minor in Engineering",
    "Islamic World, Study of the",
    "Italian",
    "Japanese Arts and Aesthetics",
    "Jewish Culture and Society",
    "Journalism",
    "Kinesiology",
    "Landscape Studies",
    "Latin American Studies",
    "Latina/Latino Studies",
    "Leadership Studies",
    "Legal Studies",
    "LGBT/Queer Studies",
    "Linguistics",
    "Materials Science & Engineering",
    "Mathematics",
    "Mathematics: Grades 9-12, Teacher Education",
    "Media",
    "Medieval Studies",
    "Minoritarian Aesthetics",
    "Molecular & Cellular Biology",
    "Music",
    "Musical Theatre for Performing Artists",
    "Natural Resource Conservation",
    "Nutrition",
    "Philosophy",
    "Physics",
    "Political Science",
    "Political & Civic Leadership",
    "Portuguese",
    "Psychology",
    "Public Health",
    "Public Relations",
    "Recreation, Sport & Tourism",
    "Religion",
    "Russian, East European & Eurasian Studies",
    "Russian Language & Literature",
    "Semiconductor Engineering",
    "Scandinavian Studies",
    "Slavic Language, Literature & Culture",
    "Social Work",
    "Sociology",
    "South Asian Studies, Interdisciplinary",
    "Spanish",
    "Spatial and Quantitative Methods in Natural Resources and Environmental Sciences",
    "Speech & Hearing Science",
    "Statistics",
    "Study of the Islamic World, Interdisciplinary",
    "Sub-Saharan African Languages",
    "Sustainability, Energy, and Environment Fellows Program",
    "Teacher Education Minor in English as a Second Language",
    "Teacher Education Minor in Secondary School Teaching",
    "Technology & Management",
    "Theatre",
    "Turkish Studies",
    "Urban Studies & Planning",
    "Wildlife & Fisheries Conservation",
    "World Literature"
];

function populateDropdown(dropdown) {
    minors.forEach(minor => {
        const option = document.createElement('option');
        option.value = minor;
        option.textContent = minor;
        dropdown.appendChild(option);
    });
}

const minorSelectorsDiv = document.getElementById('minor-selectors');
const addMinorBtn = document.getElementById('add-minor-btn');

// Populate the first dropdown
populateDropdown(document.getElementById('minor1'));

addMinorBtn.addEventListener('click', function () {
    const dropdowns = minorSelectorsDiv.querySelectorAll('.minor-dropdown');
    if (dropdowns.length < 2) {
        const newSelect = document.createElement('select');
        newSelect.className = 'minor-dropdown';
        newSelect.id = `minor${dropdowns.length + 1}`;
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '--Choose a minor--';
        newSelect.appendChild(defaultOption);
        populateDropdown(newSelect);
        minorSelectorsDiv.appendChild(newSelect);
        if (minorSelectorsDiv.querySelectorAll('.minor-dropdown').length === 2) {
            addMinorBtn.disabled = true;
        }
    } 
});