const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Welcome to the Home Page</h1>');
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Welcome to About page</h1>');
//         res.end();
//       }else{
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write('<h1>404 Not Found</h1>');
//         res.end();
//       }


// });
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });




// const users = [
//     { id: 1, name: 'Dev', email: 'dev@example.com' },
//     { id: 2, name: 'Ankit', email: 'ankit@example.com' },
//     { id: 3, name: 'Ansh', email: 'ansh@example.com' },
//     { id: 4, name: 'Dugu', email: 'dugu@example.com' }

// ]
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Welcome to the Home Page</h1>');
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Welcome to About page</h1>');
//         res.end();
//     } else if (req.url === '/users' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(users));
//         res.end();
//     } else if (req.url === '/users/count' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         const response = {
//             success: true,
//             count: users.length
//         }
//         res.write(JSON.stringify(response));
//         res.end();
//     } else if (req.method === "POST" && req.url === "/users") {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk;
//         });
//         req.on('end', () => {
//             const user = JSON.parse(body);
//             users.push(user);
//             res.writeHead(201, { 'Content-Type': 'application/json' });
//             res.write(JSON.stringify(user));
//             res.end();
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write('<h1>404 Not Found</h1>');
//         res.end();
//     }


// });
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


const products = [
    { id: 1, name: 'TV', price: 10000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Laptop', price: 50000 },
    { id: 4, name: 'Tablet', price: 15000 }
]

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    }else if(req.url === "/about"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to About page</h1>');
        res.end();
    }else if(req.url === "/products" && req.method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.write(JSON.stringify(products));
        res.end();
    }else if(req.url === "/products/count" && req.method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const response = {
            success: true,
            count: products.length
        }
        res.write(JSON.stringify(response));

        res.end();
    }else if(req.method === "POST" && req.url === "/products"){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const product = JSON.parse(body);
            products.push(product);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(product));
            res.end();
        });
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }

});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});