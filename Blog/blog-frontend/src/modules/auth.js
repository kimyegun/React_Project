import { createAction, handleActions } from "redux-actions";
import {produce} from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITALIZE_FORM = "auth/INITALIZE_FORM";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value}) => ({
    form, //register , login
    key, //username, password, passwordConfirm
    value, //실제 바꾸려는 값
  }),
  );
  export const initializeForm = createAction(INITALIZE_FORM, form => form); //register / login

const initalState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, {payload: {form,key,value}}) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다.
      }),
    [INITALIZE_FORM]: (state, {payload: form}) => ({
      ...state,
      [form]: initalState[form],
    }),
  },
  initalState
);

export default auth;
