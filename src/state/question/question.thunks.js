import { createAsyncThunk } from "@reduxjs/toolkit";
import { client, BaseUrl } from "../../api/client";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const response = await client.get(`${BaseUrl}/questions`);
    return response;
  }
);

export const fetchQuestionById = createAsyncThunk(
  "questions/fetchQuestionById",
  async (questionUrl) => {
    const response = await client.get(`${BaseUrl}${questionUrl}`);
    return response;
  }
);

export const addNewQuestion = createAsyncThunk(
  "questions/postQuestion",
  async (newQuestion) => {
    const response = await client.post(`${BaseUrl}/questions`, newQuestion);
    return response;
  }
);

export const voteQuestion = createAsyncThunk(
  "questions/postVote",
  async (voteUrl) => {
    const voteResponse = await client.post(`${BaseUrl}${voteUrl}`);
    return voteResponse;
  }
);
