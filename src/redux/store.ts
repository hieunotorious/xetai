import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { reducer } from 'redux/reducer';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer,
  middleware: [logger],
  devTools: true,
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
