import {createAction, handleActions} from 'redux-actions';
import { changeField } from './auth';

const INITUALIZE = 'write/INITUALIZE'; //모든 내용 초기화
const CHANGED_FIELD = 'write/CHANGED_FIELD'; //특정 key 값 바꾸리

export const initalize = createAction(INITUALIZE);
export const changeField = createAction(CHANGED_FIELD, ({key, value}) => ({
    key,
    value,    
}));
