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
// db.students2.find({city:"Delhi",marks:{$gte:80}})

////or
// db.students2.find({$or:[
//     {city:"Delhi"},{marks:{$gte:80}}
// ]})



////  PROJECTION
// db.students.find({},{name:1,course:1,department:1,_id:0});

////Sorting
// db.students2.find().sort({age:+1});       //ascending 
// db.students2.find().sort({age:-1});       //Decending

// // db.students2.find().sort({marks:+1});       //ascending 
// db.students2.find().sort({marks:-1});       //Decending

// db.students2.find().limit(2)

// db.students2.find().skip(2)

// db.students2.find().skip(1).limit(2)


// student find where sem 3 or course btech sort des by his marks and limit it to 2 with skipping one value


// db.students2.find();
// db.students2.find({ course: "B.Tech CSE" }).sort({ marks: -1 }).skip(1).limit(3);

