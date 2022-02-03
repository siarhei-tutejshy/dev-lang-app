const ADD_TOTAL_POINTS = 'ADD_TOTAL_POINTS';

let initialState = {
    totalPoints: 0,
};

let progressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOTAL_POINTS:
            return {
                ...state,
                totalPoints: action.points,
            };

        default:
            return state;
    }
};

export const addTotalPoints = (points) => ({
    type: ADD_TOTAL_POINTS,
    points: points,
});

export default progressReducer;
