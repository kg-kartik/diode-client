import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return <Component suppressHydrationWarning {...pageProps} />;
}

export default MyApp;
