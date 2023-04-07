import React from "react";
import { AnswerObject } from "../App";
import {Wrapper, ButtonWrapper} from './QuestionCard.style';


type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void, //any
    userAnswer: AnswerObject | undefined, //any
    questionNr: number,
    totalQuestions: number;
}



const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => (<Wrapper>
<p className="number">
    Fråga: {questionNr} / {totalQuestions}
</p>
<p dangerouslySetInnerHTML={{ __html: question}} />
<div>
{answers.map(answer =>(
    <ButtonWrapper
    key={answer}
    correct={userAnswer?.correctAnswer === answer}
    userClicked={userAnswer?.answer === answer}

    >
<button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
    .<span dangerouslySetInnerHTML={{ __html: answer}} />.
</button>
    </ButtonWrapper>

) )}

</div>

</Wrapper>
);


export default QuestionCard
