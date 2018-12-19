import { combineReducers } from 'redux';
import counter from './counter';
import modal from './modal';

export default combineReducers({
	counter,
	modal
});
