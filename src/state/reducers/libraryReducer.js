import { translateAPI } from './../../DAL/api';

const ADD_WORD = 'ADD_WORD';
const ADD_NEW_WORD_TEXT = 'ADD_NEW_WORD_TEXT';
const DELETE_WORD = 'DELETE_WORD';

let initialState = {
    library: [],
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
                        id: Date.now(),
                        word: action.data.word,
                        translate: action.data.translate,
                        learnProgress: 0,
                    },
                ],
                newWordText: '',
            };

        case ADD_NEW_WORD_TEXT:
            return {
                ...state,

                newWordText: action.newWordText,
            };
        case DELETE_WORD:
            return {
                ...state,
                library: state.library.filter((word) => word.id !== action.id),
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
        translateAPI
            .translateWord(newWord)
            .then((data) => {
                data = {
                    word: data.word.trim().toLowerCase(),
                    translate:
                        data.translate.toLowerCase().split(' ')[1] ||
                        data.translate.toLowerCase(),
                };
                dispatch(addWord(data));
            })
            .catch((e) => console.log(e));
    };
};

export const deleteWord = (wordId) => ({ type: DELETE_WORD, id: wordId });

export const addWord = (data) => ({ type: ADD_WORD, data: data });

export default libraryReducer;
