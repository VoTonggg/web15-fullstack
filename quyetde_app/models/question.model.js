var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
	content: String,
	like: {type: Number, default: 0},
	dislike: {type: Number, default: 0},
	totalVote: {type: Number, default: 0}
});

var Question = mongoose.model("Question", questionSchema, "questions");
module.exports = Question;
