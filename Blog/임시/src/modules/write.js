import {createAction,  handleActions} from 'redux-actions';

const INITALIZE = 'write/INITUALIZE'; //모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //특정 key 값 바꾸리

export const initalize = createAction(INITALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value,    
}));

const initialState = {
    title: '',
    body: '',
    tags: [],
};

const write = handleActions({
    [INITALIZE]: state => initialState, //initalState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, {payload: {key,value}}) => ({
        ...state,
        [key]: value, //특정 key 값을 업데이트
    }),
},
initialState,
);

export default write;
