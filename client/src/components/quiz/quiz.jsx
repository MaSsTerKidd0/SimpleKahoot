import React from "react";
import Answers from "../answers/answers";
import "./quiz.css";
export default function Quiz() {
  { /* TODO get from api.. */ }
  const question = "tha damm!";
  return (
    <div>
      <div className="quiz-container">
	<h3 className="question"> { question } </h3>
        <Answers questionType="Multiple Choice" numQuestions={4} />
      </div>
    </div>
  );
}
