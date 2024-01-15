import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { v4 as uuid } from 'uuid';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostState = {
  list: Post[];
};

export const getPosts = createAsyncThunk<Post[]>(
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
    async function(body , {rejectWithValue, dispatch }) {

    // const post = {
    //   title: text,
    //   id: uuid(),
    //   body
    // }

      try {
          await axios.post("https://jsonplaceholder.typicode.com/posts", body)
           .then(() => dispatch(getPosts));
      }
      catch (err) {
        return rejectWithValue("Something went wrong...")
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
      .addCase(getPosts.pending, () => {

      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.list = action.payload;

      })
      .addCase(getPosts.rejected, () => {

      })
      // .addCase(createPost.pending, () => {
      //
      // })
        .addCase(createPost.fulfilled, (   ) => {
            // state.list.push(action.payload);
        })
      //   .addCase(createPost.rejected, () => {
      //
      // })
  },
});

export const postReducer = postSlice.reducer;
