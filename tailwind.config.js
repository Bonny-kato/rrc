/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 500,
                    50: "#F2FAFC",
                    100: "#E3F3FA",
                    200: "#BFE2F5",
                    300: "#9ACDED",
                    400: "#58A1E0",
                    500: "#1C70D4",
                    600: "#1760BF",
                    700: "#10499E",
                    800: "#0A3580",
                    900: "#06235E",
                    950: "#02133D",
                },
                secondary: "#3b82f6",
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))",
            },
            container: {
                center: true,
            },

            screens: {
                "3xl": "1792px",
                "4xl": "2048px",
            },

            // shimmer skeleton loader config
            animation: {
                shimmer: "shimmer 3s infinite",
            },
            keyframes: {
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
            },
        },
    },
    plugins: [
        require("tailwindcss-debug-screens"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
