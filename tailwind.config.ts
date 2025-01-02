import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FFF4D9',
                    100: '#FFEFC4',
                    200: '#FFE39B',
                    300: '#FFD873',
                    400: '#FFCC4A',
                    500: '#FFC121',
                    600: '#E8A700',
                    700: '#B07F00',
                    800: '#785600',
                    900: '#402E00',
                    950: '#241A00',
                },
                gray: {
                    50: '#f7f7f7',
                    100: '#e3e3e3',
                    200: '#c8c8c8',
                    300: '#a4a4a4',
                    400: '#818181',
                    500: '#666666',
                    600: '#515151',
                    700: '#434343',
                    800: '#222222',
                    900: '#111111',
                },
            },
            fontFamily: {
                default: ['Onest', 'system-ui'],
            },
            backgroundImage: {
                'site-bg': 'url(/images/site-bg.png)',
            },
        },
    },
    plugins: [],
}

export default config
