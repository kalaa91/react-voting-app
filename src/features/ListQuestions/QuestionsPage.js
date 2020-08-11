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

  // listining to state for voting quesion and go to vote page when available
  useEffect(() => {
    if (question !== null) {
      history.push(`/vote/`);
    }
  }, [question, history]);

  // listining to state for questions status, and fetch if it's idle
  useEffect(() => {
    if (questionsStatus === "idle") {
      dispatch(fetchQuestions());
    }
  }, [questionsStatus, dispatch]);

  let content;

  if (questionsStatus === "loading") {
    // TODO: add better loading component
    // if questionsStatus state object is in loading mood, then show loader
    content = <div>Loading...</div>;
  } else if (questionsStatus === "succeeded") {
    // if Questions have been fetched, construct them and show the list
    const orderedPosts = Object.values(questions);
    content = orderedPosts.map((questionObj) => (
      <QuestionCard key={questionObj.id} question={questionObj} />
    ));
  } else if (questionsStatus === "failed") {
    // if Questions have failed to be fetched, show error message
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
