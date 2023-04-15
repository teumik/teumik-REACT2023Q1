import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slices/formSlice';
import { formCardsReducer } from './slices/formCardsSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    formCards: formCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store };
