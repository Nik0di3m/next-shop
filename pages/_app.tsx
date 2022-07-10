import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { globalCss } from '@nextui-org/react'
// 2. Call `createTheme` and pass your custom values

const fonts = {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
}
const lightTheme = createTheme({
    type: 'light',
    theme: {
        fonts,
    },
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        fonts,
    },
})

const globalStyles = globalCss({
    body: { margin: 0 },
})

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles()
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </NextThemesProvider>
    )
}

export default MyApp
