const ADD_PLAYWORDS = 'ADD_PLAYWORDS';
const ADD_WORD_CHECK = 'ADD_WORD_CHECK';
const CHECK_CORRECT_WORD = 'CHECK_CORRECT_WORD';

let initialState = {
    playWords: [],
    checkingWord: '',
    correctWord: false,
};

let playWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYWORDS:
            console.log(action.playWords, 'play');
            return {
                ...state,
                playWords: [...action.playWords],
            };
        case ADD_WORD_CHECK:
            return {
                ...state,
                checkingWord: action.word,
            };
        case CHECK_CORRECT_WORD:
            console.log(action.check,'check')
            return {
                ...state,
                correctWord: action.check,
            };
        default:
            return state;
    }
};

export const addWordCheck = (word) => ({
    type: ADD_WORD_CHECK,
    word: word,
});

export const addPlayWords = (playWords) => ({
    type: ADD_PLAYWORDS,
    playWords: playWords,
});

export const checkCorrectWord = (check) => ({
    type: CHECK_CORRECT_WORD,
    check: check,
});

export default playWordsReducer;
