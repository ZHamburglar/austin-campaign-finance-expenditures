export const CHANGE_MODAL = 'modal/CHANGE_MODAL';

const initialState = {
	open: false
};

export default (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_MODAL:
		return {
			...state,
			open: true
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
