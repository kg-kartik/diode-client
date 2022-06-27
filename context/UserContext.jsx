import { createContext } from "react";
import { initialState } from "./initialState";
const UserContext = createContext(initialState);

export default UserContext;
