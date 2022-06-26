import { useUser } from "../context/UserContext";

const withAuth = (Component) => {
    const Auth = () => {
        const { token } = useUser();

        // If user is not logged in, return login component
        if (!isLoggedIn) {
            return <Login />;
        }

        // If user is logged in, return original component
        return <Component {...props} />;
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;
