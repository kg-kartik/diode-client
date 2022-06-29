import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { UserProvider, useUser } from "../context/UserContext";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <UserProvider>
            <SessionProvider session={session}>
                <Head>
                    <link rel="icon" href="/public/logo.png" />
                </Head>
                <Component {...pageProps} />;
            </SessionProvider>
        </UserProvider>
    );
}

export default MyApp;
