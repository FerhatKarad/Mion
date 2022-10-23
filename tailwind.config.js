module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('https://images.unsplash.com/photo-1623150502742-6a849aa94be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                'landing-background':
                    'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://images.unsplash.com/photo-1581568736305-49a04e012c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2147&q=80)',
                'objektschutz-background':
                    "linear-gradient url('/src/assets/img/background-1920x1080.jpg')",
                'brandwache-background':
                    "linear-gradient url('https://images.unsplash.com/photo-1614338577197-5812cb856df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')",
                'objektschutz-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)) url('/src/assets/img/mall.jpg')"

            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
