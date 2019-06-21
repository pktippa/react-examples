import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import onChangeReducer from './onChangeReducer';
export default combineReducers({
 simpleReducer,
 onChangeReducer
});