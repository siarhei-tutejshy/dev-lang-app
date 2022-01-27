import { applyMiddleware, combineReducers, createStore } from 'redux';
import libraryReducer from './reducers/libraryReducer';
import thunkMiddleware from 'redux-thunk';
let reducers = combineReducers({
    library: libraryReducer,
});
const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};
let store = createStore(
    reducers,
    persistedState,
    applyMiddleware(thunkMiddleware)
);
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
window.store = store;
export default store;
