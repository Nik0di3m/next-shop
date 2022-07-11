import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextThemesProvider
            defaultTheme="dark"
            attribute="class"
        >
            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
