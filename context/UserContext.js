import { createContext, useContext, useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext({
    token: null,
    user: null,
    login: () => { },
    logout: () => { },
    isAuth: false,
    isLoginSuccessfull: null,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLogin, setisLogin] = useState(null);
    const router = useRouter();

    console.log(user, "user");

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
        const result = '';
        Axios.post("http://172.104.207.139/user/signup", {
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
                router.push("/createInstance");
                result = true;
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
