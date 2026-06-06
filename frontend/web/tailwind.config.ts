import type { PluginAPI } from 'tailwindcss/types/config';
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                prose: '720px',
                container: '1080px',
            },
            fontSize: {
                sm: ['14px', '20px'],
                base: ['16px', '24px'],
                lg: ['18px', '28px'],
                xl: ['22px', '32px'],
            },
        },
    },
    plugins: [
        function ({ addUtilities }: PluginAPI) {
            addUtilities({
            '.scrollbar-hide': {
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
                '&::-webkit-scrollbar': { display: 'none' },
            },
            });
        },
    ],
}