use("CollegeDB");
// db.createCollection("students2");
// db.students2.insert([
//     {
//         name: "Abhay",
//         age:18,
//         city:"Delhi",
//         semester:3,
//         marks:90,
//         course: "B.Tech CSE",
//         fees:1000000
//     },
//     {
//         name: "Ankit",
//         age:20,
//         city:"Gurugram",
//         semester:2,
//         marks:90,
//         course: "B.Tech CSE fsd",
//         fees:200000
//     },
//     {
//         name: "Dev",
//         age:16,
//         city:"Mumbai",
//         semester:6,
//         marks:80,
//         course: "MBBS",
//         fees:8000000
//     }
// ])
// db.students2.updateOne({name:"Ankit"},{$set:{marks:70}});
// db.students2.findOne();

// db.students2.find({marks:{$gt:80}});
// db.students2.find({marks:{$gte:80}});

////and
db.students2.find({city:"Delhi",marks:{$gte:80}})

////or
// db.students2.find({$or:[
//     {city:"Delhi"},{marks:{$gte:80}}
// ]})