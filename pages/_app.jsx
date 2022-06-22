import "../styles/globals.css";
import "../styles/card.scss";

function MyApp({ Component, pageProps }) {
    return <Component suppressHydrationWarning {...pageProps} />;
}

export default MyApp;
