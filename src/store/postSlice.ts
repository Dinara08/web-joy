import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from 'uuid';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostState = {
  list: Post[];
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

export const createPost = createAsyncThunk<unknown, Post>(
'createPost',
    async function(body , {rejectWithValue, dispatch}) {
  try {
    // const post = {
    //   title: text,
    //   id: uuid(),
    //   body:
    // }
  }
  catch(error) {
    error.rejectWithValue(error.message)
  }
    }
)

const initialState: PostState = {
  list: [],
};

export const postSlice = createSlice({
  name: "@posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {

      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;

      })
        .addCase(fetchPosts.rejected, (state, action) => {

        })
  },
});

export const postReducer = postSlice.reducer;
