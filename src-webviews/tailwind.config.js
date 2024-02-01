/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                fondo: "url('https://i.pinimg.com/564x/81/85/25/818525eae1a735b5fccd011a946c3917.jpg')",
                'footer-texture': "url('/img/footer-texture.png')",
            },
        },
    },
    plugins: [],
};
