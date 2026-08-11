const os = require('os');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const dns = require('dns');

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

// fs.writeFile("./sample.txt", "Hello, this is a sample text file 2.", (err) => {   // async function
//     if (err) {
//         console.error(err);
        
//     }else{
//         console.log("File written successfully.");
//     }
// })


// fs.appendFile("./sample.txt", "\nThis is an appended line.", (err) => {   // async function
//     if (err) {
//         console.error(err);
//     }else{
//         console.log("File appended successfully.");
//     }
// })


// fs.unlink("./sample1.txt", (err) => {   // async function
//     if (err) {
//         console.error(err);
//     }else{
//         console.log("File deleted successfully.");
//     }
// })


// const password = "ankit@8409";

// // it generates same hash code for the same password
// const hash = crypto.createHash('sha256').update(password).digest('hex');
// console.log(hash)

// const salt = crypto.randomBytes(16).toString('hex');
// // console.log(salt);

// //generates different hash codes for the same password due to the salt
// const saltedHash = crypto.createHmac('sha256',salt).update(password).digest('hex');
// console.log(saltedHash);

// const uid = crypto.randomUUID();
// // console.log(uid);


// dns.lookup('www.flipkart.com', (err, address, family) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(address);
//         console.log(family);
//     }
// });

// output:163.53.76.86
//        4

// dns.reverse('8.8.8.8', (err, hostnames) => {    
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(hostnames);
//     }
    
// });
//output: [ 'dns.google' ]


const data = process.argv
console.log(data);  // it will give the array of command line arguments passed to the script
console.log(data[2],data[3]);  


const a = data[2]
const b = data[3]
// if we take 2 and 3 in the command line this will ad the both the number
const c = Number(a) + Number(b);
console.log(c); 


// console.log(process.verion)
// console.log(process.platform)
// console.log(process.pid)