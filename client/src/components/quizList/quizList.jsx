import React from 'react';
import "./quizList.css";

export default function QuizList() {
    // TODO: get all existing lists from API
    const quizzes = [
        {
            quizName: "General Knowledge Quiz",
            creatorName: "John Doe",
            numQuestions: 10
        },
        {
            quizName: "Science Quiz",
            creatorName: "Jane Smith",
            numQuestions: 15
        },
        {
            quizName: "History Quiz",
            creatorName: "Alice Johnson",
            numQuestions: 12
        }
    ];
    // TODO get current logged user and attach the user into the game
    const joinQuiz = (id) => {
	alert(`joining quiz ${id}`)
    }
    return (
        <div>
            {quizzes.map((q, index) => (
                <div key={index}>
		    <div className= "list-container" >
			<div className="data-list-container">
			    <p className='quiz-name'>{q.quizName}</p>
			    <p>creator: {q.creatorName} </p>
			    <p>questions:{q.numQuestions}</p>
			</div>
			
		    <button className='join-btn' onClick={() => joinQuiz(3)} >Join Quiz </button>

		   </div>
                </div>
            ))}
        </div>
    );
}

