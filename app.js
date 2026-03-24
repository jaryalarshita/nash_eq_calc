const express = require("express");
const bodyParser = require("body-parser");
const findNash = require("./logic/nash");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { result: null });
});

app.post("/calculate", (req, res) => {
    const matrix = [
        [
            { A: parseFloat(req.body.a11), B: parseFloat(req.body.b11) },
            { A: parseFloat(req.body.a12), B: parseFloat(req.body.b12) }
        ],
        [
            { A: parseFloat(req.body.a21), B: parseFloat(req.body.b21) },
            { A: parseFloat(req.body.a22), B: parseFloat(req.body.b22) }
        ]
    ];

    const result = findNash(matrix);

    res.render("index", { result, matrix });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});