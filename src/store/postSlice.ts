import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostState = {
  posts: Post[];
  loading: boolean;
};

export const fetchPosts = createAsyncThunk<Post[], undefined, {}>(
  "@posts/fetchPosts",
  async function (_, {}) {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    const data = await response.json();

    return data;
  }
);

const initialState: PostState = {
  posts: [],
  loading: false,
};

export const postSlice = createSlice({
  name: "@posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
  },
});

export const postReducer = postSlice.reducer;
