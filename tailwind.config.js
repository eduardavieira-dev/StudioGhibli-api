/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                libre: ['Libre Baskerville', 'serif'],
                roboto: ['Roboto Serif', 'serif'],
            },
            colors: {
                surface: '#121212',
                divider: '#d9d9d9',
                'footer-bg': '#292929',
                'footer-color': '#f7f7f7',
            },
        },
    },
    plugins: [],
};
