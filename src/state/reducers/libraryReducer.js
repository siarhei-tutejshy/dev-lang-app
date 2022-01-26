import { translateAPI } from './../../DAL/api';
const ADD_WORD = 'ADD_WORD';
const ADD_NEW_WORD_TEXT = 'ADD_NEW_WORD_TEXT';

let initialState = {
    library: [{ word: 'кот', translate: 'cat', learnProgress: 0 }],
    newWordText: '',
};

let libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                library: [
                    ...state.library,
                    {
                        word: action.data.word,
                        translate: action.data.translate,
                        learnProgress: 0,
                    },
                ],
            };

        case ADD_NEW_WORD_TEXT:
            return {
                ...state,

                newWordText: action.newWordText,
            };
        default:
            return state;
    }
};

export const addNewWordText = (newWord) => ({
    type: ADD_NEW_WORD_TEXT,
    newWordText: newWord,
});

export const addNewWordThunk = (newWord) => {
    return (dispatch) => {
        translateAPI.translateWord(newWord).then((data) => {
            console.log(data,'data')
            dispatch(addWord(data));
        });
    };
};

export const addWord = (data) => ({ type: ADD_WORD, data: data });

export default libraryReducer;
