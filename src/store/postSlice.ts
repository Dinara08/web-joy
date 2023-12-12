import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostState = {
  list: Post[];
  loading: boolean;
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "@posts/fetchPosts",
  async function (_, {}) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    return response.data;
  }
);

const initialState: PostState = {
  list: [],
  loading: false,
};

export const postSlice = createSlice({
  name: "@posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export const postReducer = postSlice.reducer;
