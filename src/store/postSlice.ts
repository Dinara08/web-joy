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

export const fetchPosts = createAsyncThunk<Post[]>(
  "@posts/fetchPosts",
  async function (_, {}) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    return response.data;
  }
);

export const createPost = createAsyncThunk<Post, string>(
'createPost',
    async function(body , {rejectWithValue,  }) {

    // const post = {
    //   title: text,
    //   id: uuid(),
    //   body
    // }

      try {
       const responce =  await axios.post("https://jsonplaceholder.typicode.com/posts", body);

        // return (await responce.json()) as Post;

        // const data = await responce.json();
        // console.log("data", data);
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
      .addCase(fetchPosts.pending, () => {

      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;

      })
      .addCase(fetchPosts.rejected, () => {

      })
      // .addCase(createPost.pending, () => {
      //
      // })
        .addCase(createPost.fulfilled, (state, action   ) => {
            state.list.push(action.payload);
        })
      //   .addCase(createPost.rejected, () => {
      //
      // })
  },
});

export const postReducer = postSlice.reducer;
