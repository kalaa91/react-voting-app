import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../state/question/question.reducer";
export default configureStore({
  reducer: {
    questions: questionsReducer,
  },
});
