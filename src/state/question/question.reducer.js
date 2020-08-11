import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./question.state";
import {
  addNewQuestion,
  fetchQuestionById,
  fetchQuestions,
  voteQuestion,
} from "./question.thunks";

/**
 * reducer to update store based on actions
 */
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    cancelVoting(state) {
      state.votingQuestion = null;
    },
  },
  extraReducers: {
    [fetchQuestions.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchQuestions.fulfilled]: (state, action) => {
      state.status = "succeeded";
      action.payload.forEach((element) => {
        state.questions[element.url] = {
          id: element.url,
          question: element.question,
          published_at: element.published_at,
          choices: element.choices.length,
          done_voting: false,
        };
      });
    },
    [fetchQuestions.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Failed To Load Questions";
    },
    [addNewQuestion.fulfilled]: (state, action) => {
      state.questions[action.payload.url] = {
        id: action.payload.url,
        question: action.payload.question,
        published_at: action.payload.published_at,
        choices: action.payload.choices.length,
      };
    },
    [fetchQuestionById.pending]: (state, action) => {
      state.votingQuestion = null;
    },
    [fetchQuestionById.fulfilled]: (state, action) => {
      state.votingQuestion = action.payload;
    },
    [fetchQuestionById.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [voteQuestion.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const votingUrl = action.payload.url.split("/");
      const questionId = "/".concat(votingUrl[1], "/", votingUrl[2]);
      state.questions[questionId].done_voting = true;
      state.votingQuestion = null;
    },
  },
});

export const { questionAdded, cancelVoting } = questionsSlice.actions;

export default questionsSlice.reducer;
