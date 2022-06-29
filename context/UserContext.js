import Axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const UserContext = createContext({
    token: null,
    user: null,
    login: () => {},
    logout: () => {},
    isAuth: false,
    isLoginSuccessfull: null
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLogin, setisLogin] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (window) {
            const token = window.localStorage.getItem("token");
            const user = window.localStorage.getItem("user");
            if (token && user) {
                setToken(token);
                setUser(user);
            }
        }
    }, []);

    const login = (token) => {
        const result = "";
        Axios.post(`${process.env.NEXT_PUBLIC_NODE_URL}/user/signup`, {
            personalaccesstoken: token
        })
            .then((res) => res.data.data)
            .then((res) => {
                console.log(res, "login con");
                const { ...newUser } = res.user;
                setUser(newUser);
                setToken(res.token);
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(newUser));
                router.push("/selectRepo");
            })
            .catch((err) => {
                console.log(err);
                result = false;
            });
        return result;
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider
            value={{
                token,
                user,
                login,
                isAuth: !!user,
                logout,
                isLoginSuccessfull: isLogin
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
