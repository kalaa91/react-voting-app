import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllQuestions,
  selectVotingQuestion,
} from "../../state/question/question.selectors";
import { fetchQuestions } from "../../state/question/question.thunks";
import { useHistory } from "react-router-dom";
import {
  CardsWrapper,
  FloatingBottomRightButton,
  FloatingButtonContainer,
  PageHeader,
  PageWrapper,
} from "../../components";
const QuestionCard = React.lazy(() => import("./QuestionCard"));

/**
 * QuestionsPage, its The main page that is used to request questions and prepare showing them
 */
export default function QuestionsPage() {
  const dispatch = useDispatch();
  const questions = useSelector(selectAllQuestions);
  const questionsStatus = useSelector((state) => state.questions.status);
  const error = useSelector((state) => state.questions.error);
  const history = useHistory();
  const question = useSelector((state) => selectVotingQuestion(state));
  const onGoToNewQuestion = () => {
    history.push(`/add-new/`);
  };

  useEffect(() => {
    if (question !== null) {
      history.push(`/vote/`);
    }
  }, [question, history]);

  useEffect(() => {
    if (questionsStatus === "idle") {
      dispatch(fetchQuestions());
    }
  }, [questionsStatus, dispatch]);

  let content;

  if (questionsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (questionsStatus === "succeeded") {
    const orderedPosts = Object.values(questions);
    content = orderedPosts.map((questionObj) => (
      <QuestionCard key={questionObj.id} question={questionObj} />
    ));
  } else if (questionsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <PageWrapper>
      <PageHeader>Questions</PageHeader>
      <CardsWrapper>{content}</CardsWrapper>
      {questionsStatus === "succeeded" && (
        <FloatingButtonContainer>
          <FloatingBottomRightButton
            onClick={() => {
              onGoToNewQuestion();
            }}
          >
            +
          </FloatingBottomRightButton>
        </FloatingButtonContainer>
      )}
    </PageWrapper>
  );
}
