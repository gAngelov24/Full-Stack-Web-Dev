/*const majors = [
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
];*/

const majors = [
    {
        name: "Accountancy",
        requirements: {
            generalEducation: [
                { name: "Composition I", credits: [4, 6] },
                { name: "Advanced Composition", credits: 3 },
                { name: "Humanities & the Arts", credits: 6 },
                { name: "Natural Sciences & Technology", credits: 6 },
                { name: "Social & Behavioral Sciences", credits: 6, fulfilledBy: ["ECON 102", "ECON 103"] },
                { name: "Cultural Studies: Non-Western Cultures", credits: 3 },
                { name: "Cultural Studies: U.S. Minorities Cultures", credits: 3 },
                { name: "Cultural Studies: Western/Comparative Cultures", credits: 3 },
                { name: "Quantitative Reasoning", credits: [6, 10], notes: "At least one must be Quantitative Reasoning I", fulfilledBy: ["CS 105", "MATH 115", "MATH 220", "MATH 221", "MATH 231", "MATH 234", "STAT 100"] },
                { name: "Language Requirement", credits: [0, 15], notes: "Completion of the third semester or equivalent of a language other than English is required" }
            ],
            businessCore: [
                { code: "ACCY 201", name: "Accounting I", credits: 3 },
                { code: "ACCY 202", name: "Accountancy II", credits: 3 },
                { code: "BUS 101", name: "Professional Responsibility and Business", credits: 3 },
                { code: "BUS 201", name: "Business Dynamics", credits: 3 },
                { code: "BUS 301", name: "Business in Action", credits: 3 },
                { code: "BUS 401", name: "Crafting Your Purpose in Business", credits: 3 },
                { code: "BADM 210", name: "Business Analytics I", credits: 3 },
                { code: "BADM 211", name: "Business Analytics II", credits: 3 },
                { code: "BADM 275", name: "Intro to Operations and Supply Chain Management", credits: 3 },
                { code: "BADM 300", name: "The Legal Environment of Business", credits: 3 },
                { code: "BADM 310", name: "Mgmt and Organizational Behavior", credits: 3 },
                { code: "BADM 320", name: "Principles of Marketing", credits: 3 },
                { code: "BADM 449", name: "Business Policy and Strategy", credits: 3 },
                { code: "CMN 101", name: "Public Speaking", credits: 3 },
                { code: "CS 105", name: "Intro Computing: Non-Tech", credits: 3 },
                { code: "ECON 102", name: "Microeconomic Principles", credits: 3 },
                { code: "ECON 103", name: "Macroeconomics Principles", credits: 3 },
                { code: "FIN 221", name: "Corporate Finance", credits: 3 },
                {
                    name: "Business Core Math",
                    credits: [3, 5],
                    chooseOne: ["MATH 115", "MATH 220", "MATH 221", "MATH 231", "MATH 234", "STAT 100"]
                }
            ],
            businessCoreTotalHours: 57,
            major: [
                { code: "ACCY 301", name: "Atg Measurement & Disclosure", credits: 3 },
                { code: "ACCY 302", name: "Decision Making for Atg", credits: 3 },
                { code: "ACCY 303", name: "Accounting Institutions and Regulation", credits: 3 },
                { code: "ACCY 304", name: "Accounting Control Systems", credits: 3 },
                { code: "ACCY 312", name: "Principles of Taxation", credits: 3 },
                { code: "ACCY 405", name: "Assurance and Attestation", credits: 3 },
                {
                    name: "Select one of the following",
                    credits: 3,
                    chooseOne: ["ACCY 410", "ACCY 451"]
                }
            ],
            totalDegreeHours: 124
        }
    },
    {
        name: "Accountancy + Data Science",
        requirements: {
            generalEducation: [
                { name: "Composition I", credits: [4, 6] },
                { name: "Advanced Composition", credits: 3 },
                { name: "Humanities & the Arts", credits: 6 },
                { name: "Natural Sciences & Technology", credits: 6 },
                { name: "Social & Behavioral Sciences", credits: 6, fulfilledBy: ["ECON 102", "ECON 103"] },
                { name: "Cultural Studies: Non-Western Cultures", credits: 3 },
                { name: "Cultural Studies: US Minority Cultures", credits: 3 },
                { name: "Cultural Studies: Western/Comparative Cultures", credits: 3 },
                {
                    name: "Quantitative Reasoning",
                    credits: [6, 10],
                    notes: "At least one must be Quantitative Reasoning I",
                    fulfilledBy: ["STAT 107", "STAT 207", "MATH 220", "MATH 221", "MATH 234"]
                },
                {
                    name: "Language Requirement",
                    credits: [0, 15],
                    notes: "Completion of the third semester or equivalent of a language other than English is required"
                }
            ],
            businessCore: [
                { code: "ACCY 201", name: "Accounting and Accountancy I", credits: 3 },
                { code: "ACCY 202", name: "Accounting and Accountancy II", credits: 3 },
                { code: "BADM 275", name: "Introduction to Operations and Supply Chain Management", credits: 3 },
                { code: "BADM 300", name: "The Legal Environment of Business", credits: 3 },
                { code: "BADM 310", name: "Mgmt and Organizational Behavior", credits: 3, notes: "Includes limited voluntary participation as a subject in experiments" },
                { code: "BADM 320", name: "Principles of Marketing", credits: 3 },
                { code: "BADM 449", name: "Business Policy and Strategy", credits: 3 },
                { code: "BUS 101", name: "Professional Responsibility and Business", credits: 3 },
                { code: "BUS 201", name: "Business Dynamics", credits: 3 },
                { code: "BUS 401", name: "Crafting Your Purpose in Business", credits: 3 },
                { code: "CMN 101", name: "Public Speaking", credits: 3 },
                { code: "ECON 102", name: "Microeconomic Principles", credits: 3 },
                { code: "ECON 103", name: "Macroeconomic Principles", credits: 3 },
                { code: "FIN 221", name: "Corporate Finance", credits: 3 }
            ],
            businessCoreTotalHours: 42,
            accountancy: [
                { code: "ACCY 301", name: "Atg Measurement & Disclosure", credits: 3 },
                { code: "ACCY 302", name: "Decision Making for Atg", credits: 3 },
                { code: "ACCY 303", name: "Accounting Institutions and Regulation", credits: 3 },
                { code: "ACCY 304", name: "Accounting Control Systems", credits: 3 },
                { code: "ACCY 312", name: "Principles of Taxation", credits: 3 },
                { code: "ACCY 405", name: "Assurance and Attestation", credits: 3 },
                {
                    name: "Select one of the following",
                    credits: [3, 4],
                    chooseOne: ["ACCY 410", "ACCY 451"],
                    options: [
                        { code: "ACCY 410", name: "Advanced Financial Reporting", credits: [3, 4] },
                        { code: "ACCY 451", name: "Advanced Income Tax Problems", credits: [3, 4] }
                    ]
                }
            ],
            accountancyTotalHours: 21,
            dataScienceCore: [
                {
                    name: "Mathematical Foundations",
                    credits: [7, 8],
                    chooseOne: [
                        { name: "Calculus", options: ["MATH 220", "MATH 221", "MATH 234"], credits: [4, 5] },
                        { name: "Linear Algebra", options: ["MATH 227", "MATH 257"], credits: 3 }
                    ]
                },
                { code: "STAT 107", name: "Data Science Discovery", credits: 4 },
                { code: "STAT 207", name: "Data Science Exploration", credits: 4 },
                { code: "CS 307", name: "Modeling and Learning in Data Science", credits: 4 },
                { code: "CS 277", name: "Algorithms and Data Structures for Data Science", credits: 4 },
                { code: "IS 467", name: "Ethics and Policy for Data Science", credits: 3 },
                { code: "IS 477", name: "Data Management, Curation & Reproducibility", credits: 3 }
            ],
            dataScienceCoreTotalHours: [29, 30],
            researchOrDiscovery: [
                {
                    name: "Meaningful Research or Discovery Experience",
                    credits: 3,
                    notes: "Can be fulfilled through BUS 301 (active learning, real-client experience)"
                }
            ],
            totalDegreeHours: 124,
            additionalPolicies: [
                "Twelve hours of 300 and 400-level courses must be taken on this campus (residency requirement).",
                "Minimum of 40 hours of upper-division coursework (300- or 400-level) required for graduation.",
                "See Student Code § 3-801 and Academic Catalog for university and residency requirements."
            ]
        }
    },
    {
        name: "ACES Undeclared",
        requirements: {
            generalEducation: [
                { name: "Composition I", credits: [4, 6] },
                { name: "Advanced Composition", credits: 3 },
                { name: "Humanities & the Arts", credits: 6 },
                { name: "Natural Sciences & Technology", credits: 6 },
                { name: "Social & Behavioral Sciences", credits: 6 },
                { name: "Cultural Studies: Non-Western Cultures", credits: 3 },
                { name: "Cultural Studies: US Minority Cultures", credits: 3 },
                { name: "Cultural Studies: Western/Comparative Cultures", credits: 3 },
                { name: "Quantitative Reasoning", credits: [6, 8], notes: "At least one must be Quantitative Reasoning I" },
                { name: "Language Requirement", credits: [0, 15], notes: "Completion of the third semester or equivalent of a language other than English is required" }
            ],
            departmentFoundation: [
                {
                    name: "ACES Orientation",
                    options: [
                        { code: "ACES 101", name: "Contemporary Issues in ACES", credits: 2 },
                        { code: "ACES 200", name: "ACES Transfer Orientation", credits: 2 }
                    ]
                },
                {
                    name: "Communication Requirement",
                    options: [
                        { code: "CMN 101", name: "Public Speaking", credits: [3, 6] },
                        { code: "ALEC 115", name: "Let’s Talk about Food, Agriculture, and the Environment", credits: [3, 6] },
                        { code: ["CMN 111", "CMN 112"], name: "Oral & Written Comm I and II", credits: [3, 6] }
                    ]
                }
            ],
            acesUndeclaredCore: [
                { name: "Introductory major courses", credits: [3, 8] },
                { name: "Second course in major", credits: [3, 4] },
                { name: "ACES Elective", credits: 3 }
            ],
            totalHours: 30,
            additionalPolicies: [
                "Students must maintain a 2.0 or higher GPA to remain in good standing.",
                "Students must declare a major by the fifth semester or 60 hours.",
                "Maximum hours allowed in ACES Undeclared: 30 hours.",
                "Students are not able to earn a degree in ACES Undeclared.",
                "Minimum of 40 hours of upper-division coursework (300- or 400-level) required for graduation.",
                "Minimum hours required for graduation (after declaring a major): 126 hours.",
                "The university and residency requirements can be found in the Student Code (§ 3-801) and in the Academic Catalog.",
                "Specific course recommendations will vary depending on the goals and interest of the student."
            ]
        }
    },
    {
        name: "Actuarial Science, BSLAS",
        requirements: {
            generalEducation: [
                { name: "Composition I", credits: [4, 6] },
                { name: "Advanced Composition", credits: 3 },
                { name: "Humanities & the Arts", credits: 6 },
                { name: "Natural Sciences & Technology", credits: 6 },
                { name: "Social & Behavioral Sciences", credits: 6 },
                { name: "Cultural Studies: Non-Western Cultures", credits: 3 },
                { name: "Cultural Studies: US Minority Cultures", credits: 3 },
                { name: "Cultural Studies: Western/Comparative Cultures", credits: 3 },
                { name: "Quantitative Reasoning", credits: [6, 8], notes: "At least one must be Quantitative Reasoning I" },
                { name: "Language Requirement", credits: [0, 15], notes: "Completion of the third semester or equivalent of a language other than English is required" }
            ],
            major: [
                // Calculus sequence
                { code: "MATH 220", name: "Calculus", credits: 5, notes: "or MATH 221" },
                { code: "MATH 221", name: "Calculus I", credits: 4, notes: "or MATH 220" },
                { code: "MATH 231", name: "Calculus II", credits: 3 },
                { code: "MATH 241", name: "Calculus III (or equivalent)", credits: [4, 5] },
                // Computing
                {
                    name: "Select one of the following",
                    chooseOne: [
                        { code: "ASRM 195", name: "Foundations of Data Management", credits: 3 },
                        { code: "CS 101", name: "Intro Computing: Engrg & Sci", credits: 3 },
                        { code: "CS 124", name: "Introduction to Computer Science I", credits: 3 },
                        { code: "CS 125", name: "Introduction to Computer Science", credits: 4 }
                    ]
                },
                // Core
                { code: "ASRM 210", name: "Theory of Interest", credits: 3 },
                {
                    name: "Select one of the following sequences (ASRM preferred)",
                    chooseOne: [
                        [
                            { code: "ASRM 401", name: "Actuarial Statistics I", credits: 4 },
                            { code: "ASRM 402", name: "Actuarial Statistics II", credits: 4 }
                        ],
                        [
                            { code: "STAT 400", name: "Statistics and Probability I", credits: 4 },
                            { code: "STAT 410", name: "Statistics and Probability II", credits: 4 }
                        ]
                    ]
                },
                { code: "ASRM 406", name: "Linear Algebra with Financial Applications", credits: 3 },
                { code: "ASRM 441", name: "Statistics for Risk Modeling I", credits: 4 },
                // Electives
                {
                    name: "Select three or more of the following for a total of at least 12 credits",
                    chooseAtLeast: 3,
                    credits: 12,
                    options: [
                        { code: "ASRM 409", name: "Stochastic Processes for Finance and Insurance", credits: 4 },
                        { code: "ASRM 410", name: "Investments and Financial Markets", credits: 3 },
                        { code: "ASRM 442", name: "Statistics for Risk Modeling II", credits: 4 },
                        { code: "ASRM 451", name: "Basics of Statistical Learning", credits: 3 },
                        { code: "ASRM 454", name: "Generalized Linear Models", credits: 3 },
                        { code: "ASRM 455", name: "Predictive Analytics", credits: 3 },
                        { code: "ASRM 461", name: "Loss Models", credits: 4 },
                        { code: "ASRM 462", name: "Advanced Loss Models, Credibility, and Ratemaking", credits: 3 },
                        { code: "ASRM 469", name: "Casualty Actuarial Mathematics", credits: 3 },
                        { code: "ASRM 471", name: "Life Contingencies I", credits: 3 },
                        { code: "ASRM 472", name: "Life Contingencies II", credits: 3 }
                    ]
                },
                {
                    name: "Select an additional course from the above list or an approved section of ASRM 499",
                    credits: 3,
                    notes: "Announcements for ASRM 499 topics courses will include information about whether the topic is approved for use in the major, as will the course syllabus."
                },
                { code: "FIN 221", name: "Corporate Finance", credits: 3 },
                {
                    name: "Three additional courses from:",
                    credits: 9,
                    chooseThree: [
                        { code: "ACCY 200", name: "Fundamentals of Accounting", credits: 3 },
                        { code: "ECON 302", name: "Inter Microeconomic Theory", credits: 3 },
                        { code: "ECON 303", name: "Inter Macroeconomic Theory", credits: 3 },
                        { code: "FIN 230", name: "Introduction to Insurance", credits: 3 },
                        { code: "FIN 300", name: "Financial Markets", credits: 3 },
                        { code: "FIN 321", name: "Advanced Corporate Finance", credits: 3 },
                        { code: "FIN 431", name: "Property-Liability Insurance", credits: 3 },
                        { code: "FIN 432", name: "Managing Market Risks for Financial Institutions", credits: 3 },
                        { code: "FIN 434", name: "Employee Benefit Plans", credits: 3 }
                    ]
                }
            ],
            totalMajorAndSupportingHours: [58, 61],
            totalDegreeHours: 120,
            additionalPolicies: [
                "Twelve hours of 300- or 400-level courses in the major must be taken on this campus (residency requirement).",
                "Minimum of 40 hours of upper-division coursework (300- or 400-level) required for graduation.",
                "Departmental distinction: GPA in ASRM courses of at least 3.25 and at least two professional actuarial exams passed. High/Highest distinction: at least three exams and GPA in mathematics of at least 3.75.",
                "See Student Code § 3-801 and Academic Catalog for university and residency requirements."
            ]
        }
    },
    {
        name: "Advertising",
        requirements: {
            generalEducation: [
                { name: "Composition I", credits: [4, 6] },
                { name: "Advanced Composition", credits: 3 },
                { name: "Humanities & the Arts", credits: 6 },
                { name: "Natural Sciences & Technology", credits: 6 },
                {
                    name: "Social & Behavioral Sciences", credits: 6,
                    fulfilledBy: ["ADV 150",
                        "ECON 102 or ECON 103",
                        "ANTH 103 or PSYC 100 or SOC 100"]
                },
                { name: "Cultural Studies: Non-Western Cultures", credits: 3 },
                { name: "Cultural Studies: US Minority Cultures", credits: 3 },
                { name: "Cultural Studies: Western/Comparative Cultures", credits: 3 },
                {
                    name: "Quantitative Reasoning", credits: [6, 10], notes: "At least one must be Quantitative Reasoning I",
                    fulfilledBy: [
                        "ADV 200",
                        "STAT 100",
                        "ECON 202",
                        "PSYC 235",
                        "SOC 280",
                        "SOCW 225",
                        "Any other approved Quantitative Reasoning I or II"
                    ]
                },
                {
                    name: "Language Requirement",
                    credits: [0, 15],
                    notes: "Completion of the third semester or equivalent of a language other than English is required"
                }
            ],
            major: [
                { code: "ADV 150", name: "Introduction to Advertising", credits: 3 },
                { code: "ADV 250", name: "Advertising and Brand Strategy", credits: 3 },
                { code: "ADV 280", name: "Introduction to Advertising Media", credits: 3 },
                { code: "ADV 281", name: "Advertising Research Methods", credits: 3 },
                { code: "ADV 284", name: "Consumer Insight", credits: 3 },
                { code: "ADV 360", name: "Innovations in Advertising", credits: 3 },
                { code: "ADV 390", name: "Content Creation", credits: 3 },
                {
                    name: "Choose one of the following",
                    credits: 3,
                    chooseOne: [
                        { code: "ADV 492", name: "Tech and Advertising Campaigns", credits: 3 },
                        { code: "ADV 498", name: "The Sandage Project", credits: 3 }
                    ]
                },
                { name: "Advertising Electives", credits: 18, notes: "Any Advertising (ADV) course not already required above" },
                { name: "College of Media Electives", credits: 9, notes: "Courses offered by or cross-listed with ADV, JOUR, MACS, or MDIA" }
            ],
            supporting: [
                { code: "BADM 320", name: "Principles of Marketing", credits: 3, notes: "Fulfills advanced hours outside of the College requirement" },
                {
                    name: "Choose one of the following",
                    credits: 3,
                    chooseOne: [
                        { code: "ECON 102", name: "Microeconomic Principles", credits: 3 },
                        { code: "ECON 103", name: "Macroeconomic Principles", credits: 3 }
                    ]
                },
                {
                    name: "Choose one of the following",
                    credits: 3,
                    chooseOne: [
                        { code: "ADV 200", name: "Data Literacy", credits: 3 },
                        { code: "STAT 100", name: "Statistics", credits: 3 },
                        { code: "ECON 202", name: "Economic Statistics I", credits: 3 },
                        { code: "PSYC 235", name: "Statistical Methods in Psychology", credits: 3 },
                        { code: "SOC 280", name: "Methods of Social Research", credits: 3 },
                        { code: "SOCW 225", name: "Introductory Social Work Statistics", credits: 3 }
                    ],
                    notes: "Or another approved basic course or course sequence in statistical methods"
                },
                {
                    name: "Choose one of the following",
                    credits: [3, 4],
                    chooseOne: [
                        { code: "ANTH 103", name: "Anthro in a Changing World", credits: 3 },
                        { code: "PSYC 100", name: "Intro Psych", credits: 4 },
                        { code: "SOC 100", name: "Introduction to Sociology", credits: 4 }
                    ]
                }
            ],
            advancedHoursRequirement: {
                notes: "At least 20 hours in courses numbered 200 or above outside and not cross-listed with the College of Media. At least 9 of the 20 hours must be in courses numbered 300 or above. Courses used to fulfill University General Education requirements or to fulfill requirements for a minor may count toward these requirements."
            },
            totalDegreeHours: 124,
            additionalPolicies: [
                "Minimum of 40 hours of upper-division coursework (300- or 400-level) required for graduation.",
                "The university and residency requirements can be found in the Student Code (§ 3-801) and in the Academic Catalog."
            ]
        }
    },
    {
        name: "Aerospace Engineering",
        requirements: {
            generalEducation: [
                { name: "Composition I", credits: [4, 6] },
                { name: "Advanced Composition", credits: 3, fulfilledBy: ["AE 443"] },
                { name: "Humanities & the Arts", credits: 6 },
                { name: "Natural Sciences & Technology", credits: 6, fulfilledBy: ["CHEM 102", "PHYS 211", "PHYS 212"] },
                { name: "Social & Behavioral Sciences", credits: 6 },
                { name: "Cultural Studies: Non-Western Cultures", credits: 3 },
                { name: "Cultural Studies: US Minority Cultures", credits: 3 },
                { name: "Cultural Studies: Western/Comparative Cultures", credits: 3 },
                {
                    name: "Quantitative Reasoning",
                    credits: [6, 10],
                    notes: "At least one must be Quantitative Reasoning I",
                    fulfilledBy: [
                        "MATH 220 or MATH 221",
                        "MATH 231",
                        "MATH 241",
                        "MATH 285",
                        "PHYS 211",
                        "PHYS 212",
                        "CS 101 or CS 124"
                    ]
                },
                { name: "Language Requirement", credits: [0, 15], notes: "Completion of the third semester or equivalent of a language other than English is required" }
            ],
            orientation: [
                { code: "AE 100", name: "Intro to Aerospace Engineering", credits: 2 },
                { code: "ENG 100", name: "Grainger Engineering Orientation Seminar", credits: 1, notes: "External transfer students take ENG 300." }
            ],
            foundationalMathScience: [
                { code: "CHEM 102", name: "General Chemistry I", credits: 3 },
                { code: "CHEM 103", name: "General Chemistry Lab I", credits: 1 },
                { code: "MATH 221", name: "Calculus I", credits: 4, notes: "MATH 220 may be substituted. 4 of 5 credit hours count towards degree." },
                { code: "MATH 231", name: "Calculus II", credits: 3 },
                { code: "MATH 241", name: "Calculus III", credits: 4 },
                { code: "MATH 257", name: "Linear Algebra with Computational Applications", credits: 3 },
                { code: "MATH 285", name: "Intro Differential Equations", credits: 3 },
                { code: "PHYS 211", name: "University Physics: Mechanics", credits: 4 },
                { code: "PHYS 212", name: "University Physics: Elec & Mag", credits: 4 }
            ],
            technicalCore: [
                { code: "AE 140", name: "Aerospace Computer-Aided Design", credits: 2 },
                { code: "AE 202", name: "Aerospace Flight Mechanics", credits: 3 },
                { code: "AE 311", name: "Incompressible Flow", credits: 3 },
                { code: "AE 312", name: "Compressible Flow", credits: 3 },
                { code: "AE 321", name: "Mechs of Aerospace Structures", credits: 3 },
                { code: "AE 323", name: "Applied Aerospace Structures", credits: 3 },
                { code: "AE 352", name: "Aerospace Dynamical Systems", credits: 3 },
                { code: "AE 353", name: "Aerospace Control Systems", credits: 3 },
                { code: "AE 370", name: "Aerospace Numerical Methods", credits: 3 },
                { code: "AE 433", name: "Aerospace Propulsion", credits: 3, notes: "or AE 434 Rocket Propulsion" },
                { code: "AE 442", name: "Aerospace Systems Design I", credits: 3 },
                { code: "AE 443", name: "Aerospace Systems Design II", credits: 3 },
                { code: "AE 460", name: "Aerodynamics & Propulsion Lab", credits: 2 },
                { code: "AE 461", name: "Structures & Control Lab", credits: 2 },
                { code: "AE 483", name: "Autonomous Systems Lab", credits: 2 },
                { code: "CS 101", name: "Intro Computing: Engrg & Sci", credits: 3, notes: "CS 124 may be taken instead of CS 101." },
                { code: "ECE 205", name: "Electrical and Electronic Circuits", credits: 3 },
                { code: "ME 200", name: "Thermodynamics", credits: 3 },
                { code: "MSE 280", name: "Engineering Materials", credits: 3 },
                { code: "TAM 210", name: "Introduction to Statics", credits: 2 },
                { code: "TAM 212", name: "Introductory Dynamics", credits: 3 }
            ],
            technicalElectives: {
                credits: 12,
                notes: "Select from the departmentally approved list. 6 hours AE Technical Electives, 6 hours AE or Non-AE Technical Electives.",
                AE: [
                    { code: "AE 402", name: "Orbital Mechanics", credits: [3, 4] },
                    { code: "AE 403", name: "Spacecraft Attitude Control", credits: [3, 4] },
                    { code: "AE 410", name: "Computational Aerodynamics", credits: [3, 4] },
                    { code: "AE 412", name: "Viscous Flow & Heat Transfer", credits: 4 },
                    { code: "AE 416", name: "Applied Aerodynamics", credits: [3, 4] },
                    { code: "AE 419", name: "Aircraft Flight Mechanics", credits: [3, 4] },
                    { code: "AE 420", name: "Finite Element Analysis", credits: [3, 4] },
                    { code: "AE 428", name: "Mechanics of Composites", credits: 3 },
                    { code: "AE 435", name: "Electric Space Propulsion", credits: [3, 4] },
                    { code: "AE 451", name: "Aeroelasticity", credits: [3, 4] },
                    { code: "AE 454", name: "Systems Dynamics & Control", credits: [3, 4] },
                    { code: "AE 456", name: "Global Nav Satellite Systems", credits: 4 },
                    { code: "AE 468", name: "Optical Remote Sensing", credits: 3 },
                    { code: "AE 482", name: "Introduction to Robotics", credits: 4 },
                    { code: "AE 484", name: "UAV Performance, Design, and Fabrication", credits: 3 },
                    { code: "AE 485", name: "Spacecraft Environment and Interactions", credits: [3, 4] },
                    { code: "AE 497", name: "Independent Study", credits: [1, 4] },
                    { code: "AE 498", name: "Special Topics", credits: [1, 4] },
                    { code: "ENG 491", name: "Interdisciplinary Design Proj (CU1 & CU2)", credits: [1, 4] }
                ],
                NonAE: [
                    { code: "ASTR 404", name: "Stellar Astrophysics", credits: 3 },
                    { code: "ASTR 405", name: "Planetary Systems", credits: 3 },
                    { code: "ASTR 406", name: "Galaxies and the Universe", credits: 3 },
                    { code: "ASTR 414", name: "Astronomical Techniques", credits: 4 },
                    { code: "ATMS 301", name: "Atmospheric Thermodynamics", credits: 3 },
                    { code: "ATMS 302", name: "Atmospheric Dynamics I", credits: 3 },
                    { code: "ATMS 303", name: "Synoptic-Dynamic Wea Analysis", credits: 4 },
                    { code: "ATMS 304", name: "Radiative Transfer-Remote Sens", credits: 3 },
                    { code: "ATMS 305", name: "Computing and Data Analysis", credits: 3 },
                    { code: "ATMS 306", name: "Cloud Physics", credits: 3 },
                    { code: "ATMS 313", name: "Synoptic Weather Forecasting", credits: 4 },
                    { code: "ATMS 406", name: "Tropical Meteorology", credits: 4 },
                    { code: "ATMS 410", name: "Radar Remote Sensing", credits: 4 },
                    { code: "CEE 310", name: "Transportation Engineering", credits: 3 },
                    { code: "CEE 330", name: "Environmental Engineering", credits: 3 },
                    { code: "CEE 360", name: "Structural Engineering", credits: 3 },
                    { code: "CEE 380", name: "Geotechnical Engineering", credits: 3 },
                    { code: "CEE 407", name: "Airport Design", credits: [3, 4] },
                    { code: "CEE 412", name: "High-Speed Rail Engineering", credits: [3, 4] },
                    { code: "CEE 451", name: "Environmental Fluid Mechanics", credits: 3 },
                    { code: "CEE 471", name: "Structural Mechanics", credits: [3, 4] },
                    { code: "CHEM 232", name: "Elementary Organic Chemistry I", credits: [3, 4] },
                    { code: "CHEM 233", name: "Elementary Organic Chem Lab I", credits: 2 },
                    { code: "CHEM 236", name: "Fundamental Organic Chem I", credits: 4 },
                    { code: "CS 225", name: "Data Structures", credits: 4 },
                    { code: "CS 420", name: "Parallel Progrmg: Sci & Engrg", credits: [3, 4] },
                    { code: "CS 461", name: "Computer Security I", credits: 4 },
                    { code: "CS 465", name: "User Interface Design", credits: 4 },
                    { code: "CSE 412", name: "Numerical Thermo-Fluid Mechs", credits: [2, 4] },
                    { code: "ECE 210", name: "Analog Signal Processing", credits: 4 },
                    { code: "ECE 220", name: "Computer Systems & Programming", credits: 4 },
                    { code: "ECE 310", name: "Digital Signal Processing", credits: 3 },
                    { code: "ECE 311", name: "Digital Signal Processing Lab", credits: 1 },
                    { code: "ECE 329", name: "Fields and Waves I", credits: 3 },
                    { code: "ECE 330", name: "Power Ckts & Electromechanics", credits: 3 },
                    { code: "ECE 342", name: "Electronic Circuits", credits: 3 },
                    { code: "ECE 343", name: "Electronic Circuits Laboratory", credits: 1 },
                    { code: "ECE 385", name: "Digital Systems Laboratory", credits: 3 },
                    { code: "ECE 473", name: "Fund of Engrg Acoustics", credits: [3, 4] },
                    { code: "ECE 486", name: "Control Systems", credits: 4 },
                    { code: "ENG 491", name: "Interdisciplinary Design Proj (Sections SAE and HYP)", credits: [1, 4] },
                    { code: "MSE 401", name: "Thermodynamics of Materials", credits: 3 },
                    { code: "MSE 440", name: "Mechanical Behavior of Metals", credits: 3 },
                    { code: "MSE 443", name: "Design of Engineering Alloys", credits: 3 },
                    { code: "MSE 498", name: "Special Topics (Section CM3)", credits: [1, 4] },
                    { code: "SE 310", name: "Design of Structures and Mechanisms", credits: 3 },
                    { code: "SE 420", name: "Digital Control Systems", credits: 4 },
                    { code: "SE 423", name: "Mechatronics", credits: 3 },
                    { code: "IE 310", name: "Deterministic Models in Optimization", credits: 3 },
                    { code: "MATH 347", name: "Fundamental Mathematics", credits: 3 },
                    { code: "MATH 402", name: "Non Euclidean Geometry", credits: [3, 4] },
                    { code: "MATH 413", name: "Intro to Combinatorics", credits: [3, 4] },
                    { code: "MATH 416", name: "Abstract Linear Algebra", credits: [3, 4] },
                    { code: "MATH 442", name: "Intro Partial Diff Equations", credits: [3, 4] },
                    { code: "MATH 446", name: "Applied Complex Variables", credits: [3, 4] },
                    { code: "MATH 461", name: "Probability Theory", credits: [3, 4] },
                    { code: "MATH 482", name: "Linear Programming", credits: [3, 4] },
                    { code: "MATH 484", name: "Nonlinear Programming", credits: [3, 4] },
                    { code: "MATH 489", name: "Dynamics & Differential Eqns", credits: [3, 4] },
                    { code: "ME 320", name: "Heat Transfer", credits: 4 },
                    { code: "ME 360", name: "Signal Processing", credits: 3.5 },
                    { code: "ME 370", name: "Mechanical Design I", credits: 3 },
                    { code: "ME 400", name: "Energy Conversion Systems", credits: [3, 4] },
                    { code: "ME 401", name: "Refrigeration and Cryogenics", credits: [3, 4] },
                    { code: "ME 498", name: "Special Topics", credits: [1, 4] },
                    { code: "MSE 450", name: "Polymer Science & Engineering", credits: [3, 4] },
                    { code: "MSE 453", name: "Plastics Engineering", credits: 3 },
                    { code: "MSE 457", name: "Polymer Chemistry", credits: [3, 4] },
                    { code: "NPRE 201", name: "Energy Systems", credits: [2, 3] },
                    { code: "NPRE 402", name: "Nuclear Power Engineering", credits: [3, 4] },
                    { code: "NPRE 470", name: "Fuel Cells & Hydrogen Sources", credits: 3 },
                    { code: "NPRE 475", name: "Wind Power Systems", credits: [3, 4] },
                    { code: "NPRE 498", name: "Special Topics (Energy Storage and Conveyance)", credits: [1, 4] },
                    { code: "PHYS 325", name: "Classical Mechanics I", credits: 3 },
                    { code: "PHYS 326", name: "Classical Mechanics II", credits: 3 },
                    { code: "PHYS 435", name: "Electromagnetic Fields I", credits: 3 },
                    { code: "PHYS 485", name: "Atomic Phys & Quantum Theory", credits: 3 },
                    { code: "PHYS 486", name: "Quantum Physics I", credits: 4 },
                    { code: "STAT 428", name: "Statistical Computing", credits: [3, 4] },
                    { code: "STAT 448", name: "Advanced Data Analysis", credits: 4 },
                    { code: "TAM 324", name: "Behavior of Materials", credits: 4 },
                    { code: "TAM 451", name: "Intermediate Solid Mechanics", credits: 4 },
                    { code: "TAM 456", name: "Experimental Stress Analysis", credits: 3 },
                    { code: "TAM 470", name: "Computational Mechanics", credits: [3, 4] },
                    { code: "TE 401", name: "Developing Breakthrough Projects", credits: [1, 4] },
                    { code: "TMGT 461", name: "Tech, Eng, & Mgt Final Project", credits: 4 }
                ]
            },
            freeElectives: {
                credits: 10,
                notes: "Additional course work, subject to Grainger College of Engineering restrictions, to reach 128 total hours."
            },
            totalDegreeHours: 128,
            minimumGPA: 2.0,
            additionalPolicies: [
                "Minimum of 40 hours of upper-division coursework (300- or 400-level) required for graduation.",
                "The university and residency requirements can be found in the Student Code (§ 3-801) and in the Academic Catalog."
            ]
        }
    },
    ///////         LOOK MORE INTO AFRICAN AMERICAN STUDIES REQS        ////////
    "African American Studies",
    {
        name: "Agri-Accounting",
        requirements: {
            generalEducation: [
                { name: "Composition I", credits: [4, 6] },
                { name: "Advanced Composition", credits: 3 },
                { name: "Humanities & the Arts", credits: 6 },
                { name: "Natural Sciences & Technology", credits: 6 },
                {
                    name: "Social & Behavioral Sciences", credits: 6,
                    fulfilledBy: [
                        "ACE 100",
                        "ECON 103",
                        "Two other approved Social & Behavioral Sciences courses"
                    ]
                },
                { name: "Cultural Studies: Non-Western Cultures", credits: 3 },
                { name: "Cultural Studies: U.S. Minority Cultures", credits: 3 },
                { name: "Cultural Studies: Western/Comparative Cultures", credits: 3 },
                {
                    name: "Quantitative Reasoning", credits: [6, 8],
                    notes: "At least one must be Quantitative Reasoning I",
                    fulfilledBy: [
                        "MATH 220",
                        "MATH 221",
                        "MATH 234",
                        "ACE 262"
                    ]
                },
                { name: "Language Requirement", credits: [0, 15], notes: "Completion of the third semester or equivalent of a language other than English is required" }
            ],
            departmentFoundation: [
                { code: "ACE 123", name: "Introduction to ACE", credits: 2 },
                { code: "ACE 100", name: "Introduction to Applied Microeconomics", credits: 4 },
                { code: "ECON 103", name: "Macroeconomic Principles", credits: 3 },
                {
                    name: "Computer Concepts & Applications",
                    credits: 3,
                    chooseOne: [
                        { code: "ACE 161", name: "Computer Concepts & Applications", credits: 3 },
                        { code: "CS 105", name: "Intro Computing: Non-Tech", credits: 3 }
                    ]
                },
                {
                    name: "Calculus Option",
                    credits: 4,
                    chooseOne: [
                        { code: "MATH 220", name: "Calculus", credits: 4 },
                        { code: "MATH 221", name: "Calculus I", credits: 4 },
                        { code: "MATH 234", name: "Calculus for Business I", credits: 4 }
                    ]
                },
                { code: "ACCY 201", name: "Accounting and Accountancy I", credits: 3 },
                { code: "ACE 262", name: "Applied Statistical Methods and Data Analytics I", credits: 3 },
                { code: "ACE 264", name: "Applied Statistical Methods & Data Analytics II", credits: 3 },
                {
                    name: "Communication Option",
                    credits: [3, 6],
                    chooseOne: [
                        { code: "CMN 101", name: "Public Speaking", credits: 3 },
                        { code: "ALEC 115", name: "Let’s Talk about Food, Agriculture, and the Environment", credits: 3 },
                        { code: ["CMN 111", "CMN 112"], name: "Oral & Written Comm I and II", credits: 6 }
                    ]
                },
                { name: "Additional Social & Behavioral Sciences", credits: 6, notes: "Minimum of 6 additional hours" },
                { code: "ACE 341", name: "Careers and Professionalism", credits: [1, 2] },
                { code: "ACE 300", name: "Intermediate Applied Microeconomics", credits: 3 },
                {
                    name: "ACE International Course or Study Abroad Experience Option",
                    credits: 3,
                    chooseOne: [
                        { code: "ACE 411", name: "Environment and Development", credits: 3 },
                        { code: "ACE 435", name: "Global Agribusiness Management", credits: 3 },
                        { code: "ACE 436", name: "International Business Immersion", credits: 3 },
                        { code: "ACE 451", name: "Agriculture in Intl Dev", credits: 3 },
                        { code: "ACE 452", name: "The Latin American Economies", credits: 3 },
                        { code: "ACE 455", name: "International Trade in Food and Agriculture", credits: 3 }
                    ]
                }
            ],
            concentration: [
                { code: "ACCY 202", name: "Accounting and Accountancy II", credits: 3 },
                { code: "ACCY 301", name: "Atg Measurement & Disclosure", credits: 3 },
                { code: "ACCY 302", name: "Decision Making for Atg", credits: 3 },
                { code: "ACCY 303", name: "Accounting Institutions and Regulation", credits: 3 },
                { code: "ACCY 304", name: "Accounting Control Systems", credits: 3 },
                { code: "ACCY 405", name: "Assurance and Attestation", credits: 3 },
                { code: "ACE 346", name: "Tax Policy and Finan Planning", credits: 3 },
                { code: "ACE 360", name: "Spreadsheet Models and Applications", credits: 2 },
                { code: "ACE 444", name: "Financial Services & Investing Planning", credits: 3 },
                { code: "FIN 221", name: "Corporate Finance", credits: 3 }
            ],
            collegeHoursRequirement: {
                notes: "Minimum hours in the College of ACES, 20 of which must be in the Department of ACE",
                credits: 35
            },
            totalDegreeHours: 126,
            additionalPolicies: [
                "Minimum of 40 hours of upper-division coursework (300- or 400-level) required for graduation.",
                "The university and residency requirements can be found in the Student Code (§ 3-801) and in the Academic Catalog."
            ]
        }
    },
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
