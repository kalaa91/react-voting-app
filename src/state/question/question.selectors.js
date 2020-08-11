/**
 * List of selector used within features
 */
export const selectAllQuestions = (state) => state.questions.questions;
export const selectVotingQuestion = (state) => state.questions.votingQuestion;
export const selectQuestionById = (state, questionId) =>
  state.questions.questions[questionId];
