import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "../context/UserContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <UserProvider>
            <SessionProvider session={session}>
                <Component {...pageProps} />;
            </SessionProvider>
        </UserProvider>
    );
}

export default MyApp;
