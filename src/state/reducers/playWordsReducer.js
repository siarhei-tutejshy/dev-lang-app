const ADD_PLAYWORDS = 'ADD_PLAYWORDS';
const ADD_WORD_CHECK = 'ADD_WORD_CHECK';
// const DELETE_WORD = 'DELETE_WORD';

let initialState = {
    playWords: [],
    checkingWord: '',
};

let playWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYWORDS:
            return {
                ...state,
                playWords: [...action.playWords],
            };
        case ADD_WORD_CHECK:
            console.log(action.word)
            return {
                ...state,
                checkingWord: action.word,
            };
        default:
            return state;
    }
};

export const addWordCheck = (word) => ({
    type: ADD_WORD_CHECK,
    word: word,
});

// export const addNewWordThunk = (newWord) => {
//     return (dispatch) => {
//         translateAPI.translateWord(newWord).then((data) => {
//             dispatch(addWord(data));
//         });
//     };
// };

// export const deleteWord = (wordId) => ({ type: DELETE_WORD, id: wordId });
export const addPlayWords = (playWords) => ({
    type: ADD_PLAYWORDS,
    playWords: playWords,
});

export default playWordsReducer;
