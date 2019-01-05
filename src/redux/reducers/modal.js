export const CHANGE_MODAL = 'modal/CHANGE_MODAL';

const initialState = {
	open: true
};

export default (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_MODAL:
		return {
			...state,
			open: false
		};
	default:
		return state;
	}
};

export const changeModal = () => {
	return (dispatch) => {
		dispatch({
			type: CHANGE_MODAL
		});
	};
};
