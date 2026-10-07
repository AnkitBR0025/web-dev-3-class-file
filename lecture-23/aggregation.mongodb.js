use("CollegeDB");

// db.students2.insertMany([
//     {
//         name: "Rishi",
//         age: 18,
//         city: "gurugram",
//         semester: 3,
//         marks: 70,
//         course: "B Tech CSE",
//         fees: 10000000
//     },
//     {
//         name: "Shubham",
//         age: 17,
//         city: "Surat",
//         semester: 4,
//         marks: 90,
//         course: "bca",
//         fees: 200000
//     },
//     {
//         name: "Ansh",
//         age: 16,
//         city: "Delhi",
//         semester: 6,
//         marks: 80,
//         course: "MBBS",
//         fees: 1000000
//     }
// ]);

// db.students2.aggregate([
//     {
//         $match:{course:"B.Tech CSE",city:"Delhi"}
//     }
// ])
db.students2.aggregate([
    {
        $match: { course: "B.Tech CSE" }
    },
    {
        $project: { name: 1, marks: 1, semester: 1, course: 1, _id: 0 }
    },
    {
        $group: {
            _id: "$semester",
            totalMarks: { $sum: "$marks" },
            avgMarks: { $avg: "$marks" },
            maxMarks: { $max: "$marks" },
            minMarks: { $min: "$marks" }
        }
    },
    {
        $sort:{_id:-1}
    }
])