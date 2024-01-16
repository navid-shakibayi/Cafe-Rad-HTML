/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'rad-1': '#000',
            'rad-2': '#fff',
            'rad-3': '#c3c3c3',
            'rad-4': '#f7f7f7',
            'rad-5': '#e48e66',
            'rad-6': '#1a1c1e',
            'rad-7': '#333537',
            'rad-8': '#424b54',
            'rad-9': '#efe8e2',
        },

        fontFamily: {
            'IRANSans': ['IRANSans', "sanserif"],
            'IRANSans-thin': ['IRANSans-thin', "sanserif"],
            'IRANSans-extralight': ['IRANSans-extralight', "sanserif"],
            'IRANSans-light': ['IRANSans-light', "sanserif"],
            'IRANSans-medium': ['IRANSans-medium', "sanserif"],
            'IRANSans-semibold': ['IRANSans-semibold', "sanserif"],
            'IRANSans-bold': ['IRANSans-bold', "sanserif"],
            'IRANSans-extrabold': ['IRANSans-extrabold', "sanserif"],
            'IRANSans-black': ['IRANSans-black', "sanserif"],
        },

        extend: {},
    },
    plugins: [],
}

