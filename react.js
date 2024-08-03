
module.exports = {
    extends: ['@cdoublev/eslint-config'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'jsx-quotes': ['warn', 'prefer-single'],
        'react/display-name': 'warn',
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-unknown-property': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'warn',
    },
    settings: {
        react: { version: 'detect' },
    },
}
