const ADD_TOTAL_POINTS = 'ADD_TOTAL_POINTS';

// const DELETE_WORD = 'DELETE_WORD';

let initialState = {
    totalPoints: 0
};

let progressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOTAL_POINTS:
            return {
                ...state,
                totalPoints:  action.points,
            };
        
        default:
            return state;
    }
};

export const addTotalPoints = (points) => ({
    type: ADD_TOTAL_POINTS,
    points: points,
});

// export const addNewWordThunk = (newWord) => {
//     return (dispatch) => {
//         translateAPI.translateWord(newWord).then((data) => {
//             dispatch(addWord(data));
//         });
//     };
// };

// export const deleteWord = (wordId) => ({ type: DELETE_WORD, id: wordId });


export default progressReducer;
