const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: {
	type: String,
	required: true
    } ,
    numQuestion: {
	type: Number,
	required: true
    },
    correctAnswer: {
	type: mongoose.Schema.Types.ObjectId,  
	ref: 'Answer',
	required: true
    },
    gameId: {
	type: mongoose.Schema.Types.ObjectId,  
	ref: 'Game',  
	required: true
    }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;

