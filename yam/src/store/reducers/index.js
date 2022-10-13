import { combineReducers } from 'redux';
// reducers 
import reducerGame from './game';

export default combineReducers({
    m : reducerGame
});