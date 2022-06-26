import { createContext, useContext, useState, useEffect } from "react";
import Axios from "axios";

const UserContext = createContext({
    token: null,
    user: null,
    login: () => {},
    signup: () => {},
    logout: () => {},
    isAuth: false
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (window) {
            const token = window.localStorage.getItem("token");
            const user = window.localStorage.getItem("user");
            if (token && user) {
                setToken(token);
                setUser(JSON.parse(user));
            }
        }
    }, []);

    const login = (token) => {
        console.log(email, "email");
        Axios.post("http://localhost:5000/user/signup", {
            personalaccesstoken: token
        })
            .then((res) => res.data.data)
            .then((res) => {
                const { ...newUser } = res.user;
                setUser(newUser);
                setToken(res.token);
                console.log(res.token, "token");
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(newUser));
            })
            .catch((err) => {
                console.log(err.response.status);
                if (err.response.status === 400) {
                    console.log("Wrong Credentials");
                }
            });
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    const updateUser = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    return (
        <UserContext.Provider
            value={{
                token,
                user,
                login,
                signup,
                isAuth: !!user,
                logout,
                updateUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
