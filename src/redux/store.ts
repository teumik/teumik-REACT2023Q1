import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slices/formSlice';
import { formCardsReducer } from './slices/formCardsSlice';
import { apiReducer } from './slices/apiSlice';

const reducer = combineReducers({
  form: formReducer,
  formCards: formCardsReducer,
  api: apiReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store };
