import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormData } from '../../components/CustomForm/CustomForm';

export interface FormState extends Partial<Omit<FormData, 'image'>> {
  image?: string;
}

const formSlice = createSlice({
  name: 'form',
  initialState: <FormState>{},
  reducers: {
    setValue(state, action: PayloadAction<FormState>) {
      Object.assign(state, action.payload);
    },
    reset(state) {
      Object.keys(state).forEach((key) => {
        delete state[key as keyof FormData];
      });
    },
  },
});

const formReducer = formSlice.reducer;
const formAction = formSlice.actions;

export { formReducer, formAction };
