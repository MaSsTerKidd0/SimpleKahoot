const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answer: {
	type: String,
	required: true
    },
    correct: {
	type: Boolean,
	required: true
    },
    questionId: {
	type:mongoose.Schema.Types.ObjectId,
	ref: 'Question',
	required: true
    }
});
const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;

