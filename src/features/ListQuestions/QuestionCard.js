import React from "react";
import { useDispatch } from "react-redux";
import { fetchQuestionById } from "../../state/question/question.thunks";
import {
  CardBodyText,
  CardContentWrapper,
  CardItem,
  CardItemWrapper,
  CardSubTitle,
  CardTitle,
} from "../../components/index";
/**
 * QuestionCard Component, it a Question Style Card used inQuestions Page,
 * { "props": { "questionObj": {
 *   id: string,
          question: string,
          published_at: string,
          choices: [],
          done_voting: boolean,
 * }  }}
 */
export default function QuestionCard(props) {
  const { question } = props;
  const dispatch = useDispatch();

  const onGoToQuestionClicked = (questionUrl) => {
    dispatch(fetchQuestionById(questionUrl));
  };
  return (
    <CardItemWrapper
      key={question.id}
      onClick={() => {
        onGoToQuestionClicked(question.id);
      }}
    >
      <CardItem>
        <CardContentWrapper>
          <CardTitle>{question.question}</CardTitle>
          <CardSubTitle>
            {new Date(question.published_at).toDateString()}{" "}
          </CardSubTitle>
          <CardBodyText>Choices: {question.choices}</CardBodyText>
          {question.done_voting > 0 && (
            <CardBodyText>You Already Voted on That Question</CardBodyText>
          )}
        </CardContentWrapper>
      </CardItem>
    </CardItemWrapper>
  );
}
