import React from "react";
import PropTypes from "prop-types";
import "./answers.css";

const colors = {
  default: ["blue", "green", "red", "yellow"],
  trueFalse: ["green", "red"],
};

export default function Answers({ questionType, numQuestions, questionId }) {
  const answerColors =
    questionType === "True/False" ? colors.trueFalse : colors.default;
  const answers = Array.from({ length: numQuestions }, (_, index) => ({
    text: `${index + 1}`,
    color: answerColors[index % answerColors.length],
  }));

  return (
    <div>
      <div className='answers-container'>
        {answers.map((answer, index) => (
          <button key={index} className={answer.color}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
Answers.propTypes = {
  questionType: PropTypes.string.isRequired,
  numQuestions: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
};
