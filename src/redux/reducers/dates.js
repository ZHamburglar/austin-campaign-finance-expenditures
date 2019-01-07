export const CHANGE_FILTER_DATES = 'dates/CHANGE_FILTER_DATES';

const initialState = {
	filterDates: null
};

export default (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_FILTER_DATES:
		console.log('hello');
		return {
			...state,
			filterDates: action.payload
		};
	default:
		return state;
	}
};

export const changeFilterDate = ({ dates }) => {
	console.log('change filter', dates);
	return (dispatch) => {
		dispatch({
			type: CHANGE_FILTER_DATES,
			payload: dates
		});
	};
};
