export const initialState = {
	token: localStorage.getItem("token") || null,
	user: JSON.parse(localStorage.getItem("user")) || null
};
