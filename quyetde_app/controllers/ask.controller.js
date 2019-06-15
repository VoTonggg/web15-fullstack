var Question = require("../models/question.model");

module.exports.index = function(req, res) {
	res.render("ask/create");
};

module.exports.postCreate = async function(req, res) {
	var questionCreated = await Question.create(req.body);
	res.redirect("/question/" + questionCreated._id);
}