const majors = {
    ////        Grainger College of Engineering         ////
    "Aerospace Engineering": {
        total_degree_hours: 128,
        university_requirements: [
            // "Composition I" is handled in Gen Eds
        ],
        college_requirements: [
            // "ENG 100" // External transfers take ENG 300 ////    This was added to major_choice      ////
        ],
        major_core: [
            // Orientation
            "AE 100",

            // Foundational Math & Science
            "CHEM 102",
            "CHEM 103",
            // "MATH 221", // Note: MATH 220 can be substituted ////    This was added to major_choice      ////
            "MATH 231",
            "MATH 241",
            "MATH 257",
            "MATH 285",
            "PHYS 211",
            "PHYS 212",

            // Aerospace Engineering Technical Core
            "AE 140",
            "AE 202",
            "AE 311",
            "AE 312",
            "AE 321",
            "AE 323",
            "AE 352",
            "AE 353",
            "AE 370",
            "AE 442",
            "AE 443", // Note: This course also fulfills the Advanced Comp Gen Ed
            "AE 460",
            "AE 461",
            "AE 483",
            // "CS 101", // Note: CS 124 can be substituted ////    This was added to major_choice      ////
            "ECE 205",
            "ME 200",
            "MSE 280",
            "TAM 210",
            "TAM 212"
        ],

        // A list of choices where a student must pick one or more courses
        major_choice: [
            {
                "id": "eng_orientation_choice",
                "name": "Grainger Engineering Orientation",
                "courses_needed": 1,
                "courses": ["ENG 100", "ENG 300"]
            },
            {
                "id": "calculus_1_choice",
                "name": "Calculus I",
                "courses_needed": 1,
                "courses": ["MATH 221", "MATH 220"]
            },
            {
                "id": "intro_cs_choice",
                "name": "Introduction to Computing",
                "courses_needed": 1,
                "courses": ["CS 101", "CS 124"]
            },
            {
                "id": "ae_propulsion_choice", 
                "name": "Aerospace Propulsion Requirement",
                "courses_needed": 1, 
                "courses": ["AE 433", "AE 434"]
            }
        ],

        // General Education Requirements (in hours)
        gen_ed: {
            "Composition I": 4, // Fulfilled by courses like RHET 105
            "Advanced Composition": 3, // Fulfilled by AE 443 in the major_core list
            "Humanities & the Arts": 6,
            "Social & Behavioral Sciences": 6,
            "Cultural Studies - Western": 3,
            "Cultural Studies - Non-Western": 3,
            "Cultural Studies - US Minority": 3,

            // The following Gen Eds are fulfilled by required core courses, 
            // They are listed here so the validation logic can confirm it.
            "Natural Sci & Tech - Phys Sciences": 6, // Fulfilled by CHEM 102, PHYS 211, PHYS 212
            "Quantitative Reasoning I": 3, // Fulfilled by MATH 221 (or 220)
            "Quantitative Reasoning II": 3, // Fulfilled by MATH 231, MATH 241, etc.

            // Special requirement for language
            "language_requirement_levels": 3 // Represents completion of the third semester level
        },

        // Technical Elective Requirements
        technical_electives: {
            "total_hours_needed": 12,
            "ae_hours_needed": 6, // At least 6 of the 12 hours must be from the AE options list
            "ae_options": [
                "AE 402", "AE 403", "AE 410", "AE 412", "AE 416", "AE 419", "AE 420", "AE 428",
                "AE 435", "AE 451", "AE 454", "AE 456", "AE 468", "AE 482", "AE 484", "AE 485",
                "AE 497", "AE 498", "ENG 491"
            ],
            "non_ae_options": [
                "ASTR 404", "ASTR 405", "ASTR 406", "ASTR 414", "ATMS 301", "ATMS 302", "ATMS 303",
                "ATMS 304", "ATMS 305", "ATMS 306", "ATMS 313", "ATMS 406", "ATMS 410", "CEE 310",
                "CEE 330", "CEE 360", "CEE 380", "CEE 407", "CEE 412", "CEE 451", "CEE 471",
                "CHEM 232", "CHEM 233", "CHEM 236", "CS 225", "CS 420", "CS 461", "CS 465",
                "CSE 412", "ECE 210", "ECE 220", "ECE 310", "ECE 311", "ECE 329", "ECE 330",
                "ECE 342", "ECE 343", "ECE 385", "ECE 473", "ECE 486", "ENG 491", "MSE 401",
                "MSE 440", "MSE 443", "MSE 498", "SE 310", "SE 420", "SE 423", "IE 310",
                "MATH 347", "MATH 402", "MATH 413", "MATH 416", "MATH 442", "MATH 446", "MATH 461",
                "MATH 482", "MATH 484", "MATH 489", "ME 320", "ME 360", "ME 370", "ME 400",
                "ME 401", "ME 498", "MSE 450", "MSE 453", "MSE 457", "NPRE 201", "NPRE 402",
                "NPRE 470", "NPRE 475", "NPRE 498", "PHYS 325", "PHYS 326", "PHYS 435",
                "PHYS 485", "PHYS 486", "STAT 428", "STAT 448", "TAM 324", "TAM 451",
                "TAM 456", "TAM 470", "TE 401", "TMGT 461"
            ]
        },

        // Free Elective Requirements
        free_electives_hours: 10
    }
}