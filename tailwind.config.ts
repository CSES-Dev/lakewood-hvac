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
                background: "#FFFFFF",
                foreground: "#10383A",
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#10383A",
                },
                popover: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#10383A",
                },
                primary: {
                    DEFAULT: "#10383A",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#10383A",
                },
                muted: {
                    DEFAULT: "#F8F8F8",
                    foreground: "#666666",
                },
                accent: {
                    DEFAULT: "#10383A",
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
                    1: "#10383A",
                    2: "#14504A",
                    3: "#187861",
                    4: "#1C9F79",
                    5: "#20C691",
                },
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
