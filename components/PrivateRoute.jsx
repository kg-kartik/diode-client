import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (Component) => {
    const Auth = (props) => {
        const router = useRouter();

        // If user is not logged in, return login component
        useEffect(() => {
            const token = localStorage.getItem("token");
            if (!token) {
                router.replace("/login");
            }
        }, []);

        // If user is logged in, return original component
        return <Component {...props} />;
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;
