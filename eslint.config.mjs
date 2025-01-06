import react from "eslint-plugin-react";
import globals from "globals";

export default [{
    plugins: {
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {},
}];