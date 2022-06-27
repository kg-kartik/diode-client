import React, { useReducer } from "react";
import UserContext from "./UserContext";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

const UserProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const login = (userData) =>
		dispatch({
			type: "LOGIN",
			payload: userData,
		});

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		dispatch({
			type: "LOGOUT",
		});
	};

	const saveUpdatedUser = (userData) => {
		dispatch({
			type:"UPDATED_USER",
			payload:userData
		})
	}

	return (
		<UserContext.Provider
			value={{
				user: state.user,
				token: state.token,
				login,
				logout,
				saveUpdatedUser
			}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
