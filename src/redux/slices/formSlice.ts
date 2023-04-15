import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DefaultValues } from '../../components/CustomForm/CustomForm';

interface FormState {
  fields: DefaultValues;
}

const formSlice = createSlice({
  name: 'form',
  initialState: <FormState>{
    fields: {},
  },
  reducers: {
    setValue(state, action: PayloadAction<FormState>) {
      const [value] = Object.values(action.payload.fields);
      const [key] = Object.keys(action.payload.fields);
      if (!value) {
        delete state.fields[key as keyof DefaultValues];
        return;
      }
      Object.assign(state.fields, action.payload.fields);
    },
    reset(state) {
      state.fields = {};
    },
  },
});

const formReducer = formSlice.reducer;
const formAction = formSlice.actions;

export { formReducer, formAction };
