const students = {
    "A03176821034": {
        "id": "A03176821034",
        "name": "Deepak",
        "fatherName": "Dharamveer",
        "motherName": "Guddi",
        "dob": "10-08-2006",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 3,
        "education": { "tenth": 2021, "twelfth": 2023 },
        "photo": "../assets/photos/deepak.jpeg",
        "idCard": "../assets/ids/deepak.jpeg",
        "attendance": { "overall": 84, "lastMonth": 81 },
        "results": [
            { "sem": 1, "sgpa": 7.12, "cgpa": 7.12, "back": 0 },
            { "sem": 2, "sgpa": 7.24, "cgpa": 7.18, "back": 0 },
            { "sem": 3, "sgpa": 7.45, "cgpa": 7.27, "back": 0 }
        ],
        "feeReceipts": [
            { "sno": 1, "no": "RF6055101", "date": "03/08/2025", "amount": "72000" },
            { "sno": 2, "no": "RF6088202", "date": "15/01/2026", "amount": "74500" },
            { "sno": 3, "no": "RF6122303", "date": "10/08/2026", "amount": "76000" }
        ]
    },
    // NEW ADDITION: Kadam Krushna Kailas
    "A03176821088": {
        "id": "A03176821088",
        "name": "Kadam Krushna Kailas",
        "fatherName": "Kailas Murlidhar Kadam",
        "motherName": "Shaila Kailas Kadam",
        "dob": "09-08-2006",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 1,
        "education": { "tenth": 2022, "twelfth": 2024 },
        "photo": "../assets/photos/krushna.jpeg",
        "attendance": { "overall": 79, "lastMonth": 75 },
        "results": [{ "sem": 1, "sgpa": 6.85, "cgpa": 6.85, "back": 0 }],
        "feeReceipts": [{ "sno": 1, "no": "RF6099110", "date": "10/08/2025", "amount": "73000" }]
    },
    // NEW ADDITION: Kshitij Negi
    "A03176821095": {
        "id": "A03176821095",
        "name": "Kshitij Negi",
        "fatherName": "Vikram Singh Negi",
        "motherName": "Nirmala Singh Negi",
        "dob": "17-07-2004",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 1,
        "education": { "tenth": 2022, "twelfth": 2024 },
        "photo": "../assets/photos/kshitij.jpeg",
        "attendance": { "overall": 81, "lastMonth": 78 },
        "results": [{ "sem": 1, "sgpa": 7.42, "cgpa": 7.42, "back": 0 }],
        "feeReceipts": [{ "sno": 1, "no": "RF6099115", "date": "12/08/2025", "amount": "73000" }]
    },
    // UPDATED: Kishan Kanhaiya with Bihar Address and 10/12 years
    "A03176829999": {
        "id": "A03176829999",
        "name": "Kishan Kanhaiya",
        "fatherName": "Awadh Kishore Singh",
        "motherName": "Sony Devi",
        "dob": "05-02-2002",
        "gender": "Male",
        "program": "M.Sc Anthropology (Research)",
        "session": "2025-2028",
        "semester": 1,
        "address": "Othama-Sirari, Dist-Sheikhpura (Bihar)",
        "education": { "tenth": 2020, "twelfth": 2022 },
        "photo": "../assets/photos/kishan.jpeg",
        "idCard": "../assets/ids/kishan_kanhaiya.jpeg",
        "attendance": { "overall": 83, "lastMonth": 80 },
        "results": [
            { "sem": 1, "sgpa": 7.04, "cgpa": 7.04, "back": 0 }
        ],
        "feeReceipts": [
            { "sno": 1, "no": "RF7011999", "date": "20/07/2025", "amount": "77000" }
        ]
    },
    "A03176821068": {
        "id": "A03176821068",
        "name": "Adarsh Tyagi",
        "fatherName": "Mr. Rajesh Kumar Tyagi",
        "motherName": "Mrs. Geeta Devi",
        "dob": "23-05-2004",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 3,
        "education": { "tenth": 2020, "twelfth": 2022 },
        "photo": "../assets/photos/adarsh.jpeg",
        "idCard": "../assets/ids/adarsh.jpeg",
        "attendance": { "overall": 83, "lastMonth": 81 },
        "results": [
            { "sem": 1, "sgpa": 7.12, "cgpa": 7.12, "back": 0 },
            { "sem": 2, "sgpa": 7.35, "cgpa": 7.23, "back": 0 },
            { "sem": 3, "sgpa": 7.81, "cgpa": 7.42, "back": 0 }
        ],
        "feeReceipts": [
            { "sno": 1, "no": "RF6099068", "date": "12/08/2025", "amount": "69000" },
            { "sno": 2, "no": "RF6111072", "date": "14/01/2026", "amount": "71500" },
            { "sno": 3, "no": "RF6133085", "date": "12/08/2026", "amount": "73000" }
        ]
    },
    "A03176821010": {
        "id": "A03176821010",
        "name": "Sumit Kumar",
        "fatherName": "Ombir Singh",
        "motherName": "Vinesh Devi",
        "dob": "22-04-2002",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 3,
        "education": { "tenth": 2021, "twelfth": 2023 },
        "photo": "../assets/photos/sumit.jpeg",
        "idCard": "../assets/ids/sumit.jpeg",
        "attendance": { "overall": 85, "lastMonth": 84 },
        "results": [
            { "sem": 1, "sgpa": 7.21, "cgpa": 7.21, "back": 0 },
            { "sem": 2, "sgpa": 7.15, "cgpa": 7.18, "back": 0 },
            { "sem": 3, "sgpa": 7.42, "cgpa": 7.26, "back": 0 }
        ],
        "feeReceipts": [
            { "sno": 1, "no": "RF6011010", "date": "05/08/2025", "amount": "65000" },
            { "sno": 2, "no": "RF6033021", "date": "08/01/2026", "amount": "67500" },
            { "sno": 3, "no": "RF6055034", "date": "05/08/2026", "amount": "69000" }
        ]
    },
    "A03176821076": {
        "id": "A03176821076",
        "name": "Aadil Malik",
        "fatherName": "Yaseen",
        "motherName": "Shabnam",
        "dob": "30-01-2005",
        "gender": "Male",
        "program": "BPES",
        "session": "2024-2027", 
        "semester": 3,
        "education": { "tenth": 2021, "twelfth": 2023 },
        "photo": "../assets/photos/aadil.jpeg",
        "idCard": "../assets/ids/aadil.jpeg",
        "attendance": { "overall": 91, "lastMonth": 90 },
        "results": [
            { "sem": 1, "sgpa": 7.12, "cgpa": 7.12, "back": 0 },
            { "sem": 2, "sgpa": 7.45, "cgpa": 7.28, "back": 0 },
            { "sem": 3, "sgpa": 7.85, "cgpa": 7.47, "back": 0 }
        ],
        "feeReceipts": [
            { "sno": 1, "no": "RF6011076", "date": "10/08/2024", "amount": "75000" },
            { "sno": 2, "no": "RF6044087", "date": "15/01/2025", "amount": "77500" },
            { "sno": 3, "no": "RF6077099", "date": "10/08/2025", "amount": "79000" }
        ]
    },
    "A03176821079": {
        "id": "A03176821079",
        "name": "Sourabh",
        "fatherName": "Ompal Singh",
        "motherName": "Rekha Devi",
        "dob": "08-09-2006",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 1,
        "education": { "tenth": 2022, "twelfth": 2024 },
        "photo": "../assets/photos/sourabh.jpeg",
        "idCard": "../assets/ids/sourabh_.jpeg",
        "attendance": { "overall": 87, "lastMonth": 86 },
        "results": [{ "sem": 1, "sgpa": 7.12, "cgpa": 7.12, "back": 0 }],
        "feeReceipts": [{ "sno": 1, "no": "RF6055079", "date": "09/08/2025", "amount": "73000" }]
    },
    "A0317682134": {
        "id": "A0317682134",
        "name": "Ankur Kumar",
        "fatherName": "Ashok Kumar",
        "motherName": "Susma Devi",
        "dob": "07-07-2005",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 1,
        "education": { "tenth": 2023, "twelfth": 2025 },
        "photo": "../assets/photos/ankur.jpeg",
        "idCard": "../assets/ids/ankur.jpeg",
        "attendance": { "overall": 82, "lastMonth": 80 },
        "results": [{ "sem": 1, "sgpa": 7.04, "cgpa": 7.04, "back": 0 }],
        "feeReceipts": [{ "sno": 1, "no": "RF6033134", "date": "10/08/2025", "amount": "68000" }]
    },
    "A03176821017": {
        "id": "A03176821017",
        "name": "Dharmender",
        "fatherName": "Mukesh Choudhary",
        "motherName": "Satyawati Devi",
        "dob": "08-08-2004",
        "gender": "Male",
        "program": "BPES",
        "session": "2025-2028",
        "semester": 1,
        "education": { "tenth": 2022, "twelfth": 2024 },
        "photo": "../assets/photos/dharmender.jpeg",
        "idCard": "../assets/ids/dharmender.jpeg",
        "attendance": { "overall": 88, "lastMonth": 85 },
        "results": [{ "sem": 1, "sgpa": 7.11, "cgpa": 7.11, "back": 0 }],
        "feeReceipts": [{ "sno": 1, "no": "RF6044017", "date": "05/08/2025", "amount": "71000" }]
    }
};

const globalProgramData = {
    "BPES": {
        "1": [
            { code: "BPE101", title: "History & Foundation of Physical Education", cu: 3, l: 3, t: 0, p: 0, stream: "Phys Ed", domain: "HUMANITIES" },
            { code: "BPE102", title: "Anatomy & Physiology – I", cu: 3, l: 3, t: 0, p: 0, stream: "Science", domain: "SCIENCE" },
            { code: "BPE151", title: "Athletics (Track & Field – I)", cu: 2, l: 0, t: 0, p: 4, stream: "Sports", domain: "PRACTICAL" }
        ],
        "2": [
            { code: "BPE201", title: "Anatomy & Physiology – II", cu: 3, l: 3, t: 0, p: 0, stream: "Science", domain: "SCIENCE" },
            { code: "BPE203", title: "Sports Nutrition & Weight Management", cu: 3, l: 3, t: 0, p: 0, stream: "Health", domain: "SCIENCE" },
            { code: "BPE251", title: "Athletics (Track & Field – II)", cu: 2, l: 0, t: 0, p: 4, stream: "Sports", domain: "PRACTICAL" }
        ],
        "3": [
            { code: "BPE301", title: "Kinesiology & Biomechanics", cu: 3, l: 3, t: 0, p: 0, stream: "Science", domain: "SCIENCE" },
            { code: "BPE302", title: "Sports Psychology & Sociology", cu: 3, l: 3, t: 0, p: 0, stream: "Social Science", domain: "HUMANITIES" },
            { code: "BPE303", title: "Methods of Teaching in Physical Education", cu: 3, l: 2, t: 1, p: 0, stream: "Education", domain: "CORE" },
            { code: "BPE351", title: "Practical: Gymnastics & Aerobics", cu: 2, l: 0, t: 0, p: 4, stream: "Sports", domain: "PRACTICAL" }
        ]
    },
    "M.Sc Anthropology (Research)": {
        "1": [
            { code: "ANT101", title: "Physical & Biological Anthropology", cu: 4, l: 3, t: 1, p: 0, stream: "Research", domain: "SCIENCE" }
        ],
        "2": [
            { code: "ANT201", title: "Human Genetics & Variation", cu: 4, l: 3, t: 1, p: 0, stream: "Research", domain: "SCIENCE" }
        ],
        "3": [
            { code: "ANT301", title: "Applied Anthropology", cu: 4, l: 3, t: 1, p: 0, stream: "Research", domain: "SOCIAL SCIENCE" },
            { code: "ANT302", title: "Indian Anthropology", cu: 4, l: 3, t: 1, p: 0, stream: "Research", domain: "HUMANITIES" },
            { code: "ANT321", title: "Dissertation: Literature Review", cu: 6, l: 0, t: 0, p: 12, stream: "Research", domain: "RESEARCH" }
        ]
    }
};

window.getUser = () => {
    const id = localStorage.getItem('logged_in_id') || "A03176821034";
    const user = students[id];
    if (user) {
        user.courses = globalProgramData[user.program] || {};
    }
    return user;
};