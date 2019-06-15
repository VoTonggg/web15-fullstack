var Question = require("../models/question.model");

module.exports.index = async function(req, res) {
	var questions = await Question.find();
	var questionCount = questions.length;
	var randomNumber = Math.floor(Math.random()*questionCount);
	var question = questions[randomNumber];
	res.render("question/index", {
		question: question
	});

};

module.exports.view = async function(req, res) {
	var questionId = req.params.id;
	var questionFound = await Question.findById(questionId);
	if(!questionFound) {
		console.log("Question not found");
		res.send("Error");
	}
	else {
		var likeCount = questionFound.like;
		var dislikeCount = questionFound.dislike;
		var totalVote = questionFound.totalVote;
		var likePercent, dislikePercent;
		if(totalVote === 0) {
			likePercent = 50;
			dislikePercent = 50;
		}
		else {
			likePercent = Math.floor(likeCount/totalVote);
			dislikePercent = 100 - likePercent;
		}
		res.render("question/view", {
			question: questionFound,
			likePercent: likePercent,
			dislikePercent: dislikePercent
		})
	}
}