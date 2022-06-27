import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { UserProvider, useUser } from "../context/UserContext";
import { useEffect } from "react";

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
