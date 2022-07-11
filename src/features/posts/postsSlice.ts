import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PostScheme } from 'src/features/posts/Post';
import { RootState } from 'src/state/store';

import { fetchPosts } from './service';

export interface PostsState {
  list: PostScheme[];
  filteredList: PostScheme[];
  status: 'idle' | 'loading' | 'failed';
  error?: string;
}

const initialState: PostsState = {
  list: [],
  filteredList: [],
  status: 'idle',
  error: undefined,
};

export const fetchPostsAsync = createAsyncThunk('posts/fetch', async () => {
  try {
    const response = await fetchPosts();
    return response;
  } catch (error) {
    // custom error handling
    throw error;
  }
  // The value we return becomes the `fulfilled` action payload
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: ({ list }, action: PayloadAction<PostScheme[]>) => {
      list.push(...action.payload);
    },
    filterPosts: (state, action: PayloadAction<string>) => {
      const result = state.list.filter(
        post =>
          post.body.includes(action.payload) ||
          post.title.includes(action.payload)
      );
      state.list = result;
    },
    removePost: ({ list }, action: PayloadAction<PostScheme>) => {
      const index = list.findIndex(post => post.id === action.payload.id);
      if (index > -1) list.splice(1, index);
    },
    clearPosts: ({ list }) => {
      list.splice(1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPostsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list.push(...action.payload);
      })
      .addCase(fetchPostsAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { addPosts, removePost, clearPosts, filterPosts } =
  postsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPosts = (state: RootState): PostScheme[] => state.posts.list;

export default postsSlice.reducer;
