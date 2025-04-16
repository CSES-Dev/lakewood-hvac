import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Chivo", "sans-serif"],
            },
            colors: {
                background: "#232323",
                foreground: "#4F6E4E",
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#4F6E4E",
                },
                popover: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#4F6E4E",
                },
                primary: {
                    DEFAULT: "#4F6E4E",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#4F6E4E",
                },
                muted: {
                    DEFAULT: "#F8F8F8",
                    foreground: "#666666",
                },
                accent: {
                    DEFAULT: "#4F6E4E",
                    foreground: "#FFFFFF",
                },
                destructive: {
                    DEFAULT: "#D32F2F",
                    foreground: "#FFFFFF",
                },
                border: "#E0E0E0",
                input: "#FFFFFF",
                ring: "#10383A",
                chart: {
                    1: "#4F6E4E",
                    2: "#14504A",
                    3: "#187861",
                    4: "#1C9F79",
                    5: "#20C691",
                },
                header: "#F0F0F0",
                button: "#4F6E4E",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;
