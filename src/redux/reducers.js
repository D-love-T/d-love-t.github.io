import {combineReducers} from 'redux';

import homeReducer from '../app/Home/redux/reducer';


export default combineReducers({
    homeReducer:homeReducer
})