import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { PostScheme } from 'src/features/posts/Post';
import { RootState, AppThunk } from 'src/state/store';

import { fetchPosts } from './service';

export interface PostsState {
  list: PostScheme[];
  status: 'idle' | 'loading' | 'failed';
  error?: string;
}

const initialState: PostsState = {
  list: [],
  status: 'idle',
  error: undefined,
};

type PostsActionTypes = 'FETCH_POSTS' | 'REMOVE_POST' | 'CLEAR_POSTS';

export interface NotificationAction extends AnyAction {
  type: PostsActionTypes;
  payload?: PostScheme[];
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchPostsAsync = createAsyncThunk('posts/fetch', async () => {
  const response = await fetchPosts();
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addPosts: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.posts += 1;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    removePost: ({ list }, action: PayloadAction<PostsActionTypes>) => {
      if (action.type === '') {
        const index = list.findIndex(post => post.id === action.payload);
        list.splice(1, index);
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    clearPosts: ({ list }, action: PayloadAction<PostsActionTypes>) => {
      list.splice(1);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
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

export const { addPosts, removePost } = postsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPosts = (state: RootState): PostScheme[] => state.posts.list;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default postsSlice.reducer;
