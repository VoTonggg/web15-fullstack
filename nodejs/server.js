const express = require("express");

const app = express();

app.get("/", (req, res) => {
	console.log("Hello");
	res.send({success: 1, data: "Hello world!"});
})

const port = 6969;
app.listen(6969, (err) => {
	if(err) console.log(err);
	else console.log("Server is running on port " + port);
});