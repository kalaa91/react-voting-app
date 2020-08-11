import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVotingQuestion } from "../../state/question/question.selectors";
import { voteQuestion } from "../../state/question/question.thunks";
import { cancelVoting } from "../../state/question/question.reducer";
import { useHistory } from "react-router-dom";
import {
  CardBodyText,
  CardContentWrapper,
  CardItem,
  CardItemWrapper,
  CardSubTitle,
  CardTitle,
  CardsWrapper,
  FloatingBottomFullButton,
  FloatingBottomFullButtonContainer,
  PageWrapper,
  BackButton,
} from "../../components";

const VotingHeader = React.lazy(() => import("./VotingHeader"));

/**
 * This Page is used to Show Choices and facilitate voting
 */
export default function VotingPage() {
  const dispatch = useDispatch();
  const question = useSelector((state) => selectVotingQuestion(state));
  const history = useHistory();
  const [selectedVote, setActiveVote] = useState(null);

  // Cancel Voting process and go back
  const clearVoteAndGoBack = () => {
    dispatch(cancelVoting());
  };

  // Dispatch voting process with vote url
  const voteForQuestion = (voteUrl) => {
    dispatch(voteQuestion(voteUrl));
    alert("Thank you for voting");
  };

  // listining to state for voting quesion and go back after the quesiont being removed
  useEffect(() => {
    if (question == null) {
      history.push(`/`);
    }
  }, [question, history]);

  let content;
  if (!question) {
    return (
      <section>
        <h2>question not found!</h2>
      </section>
    );
  } else {
    const totalVotes = question.choices
      .map((choice) => choice.votes)
      .reduce((a, b) => a + b, 0);

    content = question.choices.map((choice) => (
      <CardItemWrapper
        key={choice.url}
        onClick={() => {
          setActiveVote(choice);
        }}
      >
        <CardItem>
          <CardContentWrapper>
            <CardTitle>{choice.choice}</CardTitle>
            <CardSubTitle>Votes: {choice.votes}</CardSubTitle>
            <CardBodyText>
              Percentage:{" "}
              {totalVotes === 0
                ? 0
                : Math.round((choice.votes / totalVotes) * 100 * 10) / 10}{" "}
              %
            </CardBodyText>
          </CardContentWrapper>
        </CardItem>
      </CardItemWrapper>
    ));
  }
  return (
    <nav>
      <section>
        <BackButton
          onClick={() => {
            clearVoteAndGoBack();
          }}
        >
          &laquo; Back
        </BackButton>
      </section>
      <section>
        <PageWrapper>
          <VotingHeader
            question={question.question}
            publishedDate={question.published_at}
          />
          <CardsWrapper>{content}</CardsWrapper>
        </PageWrapper>
      </section>
      <section>
        <FloatingBottomFullButtonContainer>
          <FloatingBottomFullButton
            disabled={!selectedVote}
            onClick={() => {
              voteForQuestion(selectedVote.url);
            }}
          >
            {selectedVote
              ? `Vote for ${selectedVote.choice}!`
              : "Click one of the choices to vote!"}
          </FloatingBottomFullButton>
        </FloatingBottomFullButtonContainer>
      </section>
    </nav>
  );
}
