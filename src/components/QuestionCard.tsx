import React from "react";
import { AnswerObject } from "../App";
import { Wrappers, ButtonWrapper } from "./QuestionCard.style";

// dangerouslySetInnerHTML för att få texten korrekt ist för att importera decode() html-entities

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void; //any
  userAnswer: AnswerObject | undefined; //any
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrappers>
    <p>
      Fråga: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            type="submit"
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />.
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrappers>
);

export default QuestionCard;
