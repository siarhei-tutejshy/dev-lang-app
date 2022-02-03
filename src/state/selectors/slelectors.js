export const library = state => state.library.library 

export const newWordText = state=> state.library.newWordText

export const playWords = state => state.playWords.playWords;

export const checkingWordSelector = state => state.playWords.checkingWord;

export const totalPointsSelector = state => state.progress.totalPoints;

export const isCorrectWordSelector = state => state.playWords.correctWord;


