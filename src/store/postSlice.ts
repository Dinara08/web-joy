import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Post = {
  id: string;
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
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    return response.data;
  }
);




export const createPost = createAsyncThunk<Post>(
'createPost',
    async function(body , {rejectWithValue, }) {

    // const post = {
    //   title: text,
    //   id: uuid(),
    //   body
    // }

      try {
         const response =  await axios.post("https://jsonplaceholder.typicode.com/posts", body)
           // .then(() => dispatch(getPosts));
          return response.data;
          console.log('response', response.data);
      }
      catch (err) {
        return rejectWithValue("Something went wrong...")
      }

    }
)




export const removePost = createAsyncThunk<Post>(
    'removePost',
    async function (id, {rejectWithValue,}) {
        try {
          const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return response.data;
            console.log('response', response.data);
        }
        catch (error) {
            return rejectWithValue("Something went wrong...")
        }
    }
)


const initialState: PostState = {
  list: [],
};

// console.log('initialList', initialState)

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

        .addCase(createPost.fulfilled, (state, action  ) => {
            state.list.push(action.payload);
            console.log('action payload: ', action.payload)
        })
        .addCase(removePost.fulfilled, (state, action) => {
            state.list = state.list.filter(post => post.id !== action.payload);
            console.log('action payload', action.payload);
        })

  },
});

export const postReducer = postSlice.reducer;
