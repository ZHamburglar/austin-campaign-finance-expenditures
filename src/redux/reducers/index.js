import { combineReducers } from 'redux';
import counter from './counter';
import modal from './modal';
import dates from './dates';

export default combineReducers({
	counter,
	modal,
	dates
});
