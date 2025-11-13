/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tw_elements_react from "tw-elements-react/dist/plugin.cjs";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        // Needed for TW Elements React components like carousel
        "./node_modules/tw-elements-react/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            transitionDuration: {
                300: "300ms",
            },
        },
    },
    plugins: [daisyui, tw_elements_react],
};
