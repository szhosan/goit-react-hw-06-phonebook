import { combineReducers } from 'redux';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const items = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: contact => {
        const id = nanoid();
        return { payload: { id, ...contact } };
      },
    },
    deleteContact: {
      reducer: (state, { payload }) => state.filter(({ id }) => id !== payload),
    },
  },
});

const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});

export const { addContact, deleteContact } = items.actions;
export const { changeFilter } = filter.actions;

export default combineReducers({
  items: items.reducer,
  filter: filter.reducer,
});
