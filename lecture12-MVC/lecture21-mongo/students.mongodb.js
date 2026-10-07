use("CollegeDB");

// db.createCollection("students")          //run once and then comment

// db.students.insertOne(
//     {RollNo:1,name:"Ankit",course:"B.Tech CSE",marks:"A"}
// )

// db.students.insertOne(
//     {RollNo:2,name:"Dev",course:"B.Tech CSE",marks:"A+"}
// );

// db.students.insertMany([
//     {RollNo:3,name:"Abhay",course:"B.Tech CSE",marks:"A"},
//     {RollNo:4,name:"Yuvraj",course:"Bca",marks:"A"},
//     {RollNo:5,name:"Ansh",course:"MBA",marks:"B"},
//     {RollNo:6,name:"Aakash",course:"MBBS",marks:"B"}
// ]);


////works in both one and many

// db.students.insert(
//     {RollNo:8,name:"Aaryan",course:"MBBS",marks:"A"}
// );


////read operations
// db.students.findOne();        //return forst on documant fron the collection
// db.students.find();           //return all document
// db.students.find({marks:"A"});
// db.students.find({name:"Ankit"});



//// Update Document
// db.students.updateOne({name:"Ankit"},{$set:{course:"B.Tech cse-fsd",marks:"A+"}})

// db.students.updateMany({marks:"B"},{$set:{marks:"A"}})
// db.students.updateOne({name:"Aaryan"},{$set:{course:"B.Tech cse-fsd",marks:"B"}})

// db.students.updateOne({RollNo:1},{$set:{department:"SOET"}})
db.students.updateMany({},{$set:{department:"SOET"}})

////delete documents
// db.students.deleteOne({RollNo:6});


