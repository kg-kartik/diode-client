export const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
			};
		case "LOGOUT":
			return {
				...state,
				token: null,
				user: null,
			};
		case "UPDATED_USER":
			return{
				...state,
				user:action.payload.user,
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
