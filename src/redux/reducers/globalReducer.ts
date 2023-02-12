import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GlobalState = {
  id: string;
  title: string;
};

// Initial state
const initialState: GlobalState = { id: '', title: 'Better You - Better Us' };

// Actual Slice
export const { actions, reducer } = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobal(state, action: PayloadAction<GlobalState>) {
      state.id = action.payload.id;
      state.title = action.payload.title;
    },

    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },

    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

const selectors = (<S extends { global: GlobalState }>() => {
  const getState = (state: S) => state.global;
  const selectGlobal = createSelector(getState, (state) => state);
  const selectTitle = createSelector(getState, (state) => state.title);
  const selectId = createSelector(getState, (state) => state.id);

  return { selectGlobal, selectTitle, selectId };
})();

// eslint-disable-next-line import/no-anonymous-default-export
export default { actions, reducer, selectors };
