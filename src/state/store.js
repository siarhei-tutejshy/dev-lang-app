import { applyMiddleware, combineReducers, createStore } from 'redux';
import  libraryReducer from './reducers/libraryReducer';
import thunkMiddleware from 'redux-thunk';
let reducers = combineReducers({
    library: libraryReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store= store
export default store;
