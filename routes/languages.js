const express = require("express");
const languages = express.Router();
//const router = express.Router();

languages.get("/", (req, res) => {
    console.log(req.body);
res.send("This is so amazing.");
});

languages.post("/", (req, res) => {
    console.log(req.body);
res.send("This is so amazing.");
});

languages.send("/", (req, res) => {
    console.log(req.body);
res.send("This is so amazing.");
});

languages.delete("/", (req, res) => {
    console.log(req.body);
res.send("This is so amazing.");
});

languages.get("/:id", (req, res) => {
    console.log(req.params.id);
res.send("This is one language.");
});

languages.get("/node", (req, res) => {
res.send("Node is the best.");
});

languages.post('/', (req, res) => {
    const upperName = req.body.name.toUpperCase();
    res.json({ data: upperName}); //req.body.name });
});


module.exports = languages;