const express = require('express');
const router = require("./router");
const cors = require("cors");

const app = express();

app.use(express.json())

app.use(cors());

app.get("/", (req, res) => {
    res.status(201).send("on est la braa");
});


app.use("/api", router);

app.use("/static", express.static(`${__dirname}/assets`));
app.use("/static", express.static("public/images"));
app.use("/static", express.static("public/upload"));

module.exports = app;
