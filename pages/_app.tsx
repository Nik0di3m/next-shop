import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextThemesProvider
            defaultTheme="dark"
            attribute="class"
        >
            <Component {...pageProps} />
        </NextThemesProvider>
    );
}

export default MyApp;
