const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     let age = 18;
//     try {
//         if (age <= 18) {
//             throw new Error("Age is not valid");

//         } else {
//             res.send("Welcome to the website");
//         }
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// })

app.get("/", (req, res, next) => {
    let age = 20;
    try {
        if (age <= 18) {
            throw new Error("Age is not valid");

        } else {
            res.send("Welcome to the website");
        }
    } catch (err) {
        next(err);
    }
})


//invalid middleware
app.use((req, res) => {            
    res.status(404).send({
        success: false,
        message: "Page Not Found"
    }
    );
})

//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send({
        success: false,
        message: err.message
    })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});