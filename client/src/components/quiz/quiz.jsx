import React from "react";
import Answers from "../answers/answers";
export default function Quiz() {
  return (
    <div>
      <h1>Quiz Page</h1>
      <div>
        <Answers questionType="Multiple Choice" numQuestions={4} />
        <Answers questionType="True/False" numQuestions={2} />
      </div>
    </div>
  );
}
