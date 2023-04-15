import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slices/formSlice';
import { formCardsReducer } from './slices/formCardsSlice';

const reducer = combineReducers({
  form: formReducer,
  formCards: formCardsReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store };
