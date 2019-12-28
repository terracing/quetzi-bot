const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use("/static", express.static('assets'));

var default_router = require("./routes/default.js");
app.use("/", default_router);

app.listen(8081);