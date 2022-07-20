/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    100: "#cccccc",
                    200: "#999999",
                    300: "#666666",
                    400: "#333333",
                    500: "#222222",
                    600: "#111111",
                    700: "#080808",
                    800: "#000000",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
