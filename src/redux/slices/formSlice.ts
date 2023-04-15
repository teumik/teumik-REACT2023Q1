import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DefaultValues } from '../../components/CustomForm/CustomForm';

type FormState = DefaultValues;

const formSlice = createSlice({
  name: 'form',
  initialState: <FormState>{},
  reducers: {
    setValue(state, action: PayloadAction<FormState>) {
      Object.assign(state, action.payload);
    },
    reset(state) {
      Object.keys(state).forEach((key) => {
        delete state[key as keyof FormState];
      });
    },
  },
});

const formReducer = formSlice.reducer;
const formAction = formSlice.actions;

export { formReducer, formAction };
