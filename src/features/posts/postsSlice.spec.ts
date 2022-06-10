import postsReducer, { PostsState, addPosts, removePost } from './postsSlice';

describe('counter reducer', () => {
  const initialState: PostsState = {
    list: [],
    status: 'idle',
  };

  it('Handles the FETCH_POST action as expected when the initial state is an empty object', () => {
    const action = {
      type: 'FETCH_POSTS',
      payload: [
        {
          userId: 1,
          id: 1,
          title: 'Title Test',
          body: 'Test',
        },
        {
          userId: 1,
          id: 2,
          title: 'Title Test 2',
          body: 'Test2',
        },
      ],
    };

    expect(postsReducer(initialState, action)).toEqual([
      { body: 'Test', id: 1, title: 'Title Test', userId: 1 },
      { body: 'Test2', id: 2, title: 'Title Test 2', userId: 1 },
    ]);
  });

  it('Handles the CLEAR_POSTS action as expected', () => {
    const action = {
      type: 'CLEAR_POSTS',
    };

    // const initialState = {
    //   3: {
    //     body: 'Test',
    //     id: 3,
    //     title: 'Title Test 3',
    //     userId: 2,
    //   },
    // };

    expect(postsReducer(initialState, action)).toEqual({});
  });

  // it('should handle initial state', () => {
  //   expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
  //     value: 0,
  //     status: 'idle',
  //   });
  // });

  // it('should handle increment', () => {
  //   const actual = postsReducer(initialState, increment());
  //   expect(actual.list).toEqual(4);
  // });

  // it('should handle decrement', () => {
  //   const actual = postsReducer(initialState, decrement());
  //   expect(actual.list).toEqual(2);
  // });

  // it('should handle incrementByAmount', () => {
  //   const actual = postsReducer(initialState, incrementByAmount(2));
  //   expect(actual.list).toEqual(5);
  // });
});
