const path = require('path');
const fs = require('fs');

// const filePath = path.resolve("lecture5","coremodule.js");
// console.log(filePath);

// const filrPath = "WEB DEV 3/lectures_folder/lecture5/coreModule.js";
// console.log(path.basename(filrPath));
// console.log(path.dirname(filrPath));
// console.log(path.extname(filrPath));




// const data = fs.readFileSync("./sample.txt", "utf-8");
// console.log(data);


// fs.readFile("./sample.txt", "utf-8", (err, data) => {   // async function
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// fs.writeFileSync("./sample.txt", "Hello, this is a sample text file."); // sync function

fs.writeFile("./sample.txt", "Hello, this is a sample text file 2.", (err) => {   // async function
    if (err) {
        console.error(err);
        
    }else{
        console.log("File written successfully.");
    }
})