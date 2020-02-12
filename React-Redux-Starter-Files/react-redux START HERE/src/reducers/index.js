import {combineReducers} from 'redux';
import home from './HomeReducer';
import movie from './MovieReducer';

const rootReducer =combineReducers({home,movie})

export default rootReducer;