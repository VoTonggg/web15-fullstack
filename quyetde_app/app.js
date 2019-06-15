require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

var questionRouter = require("./routes/question.route");
var askRouter = require("./routes/ask.route");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.redirect("/question");
});

app.use("/question", questionRouter);
app.use("/ask", askRouter);

const port = 6969
app.listen(port, (err) => {
	if(err) console.log(err)
	else console.log("Server is running on port " + port);
});