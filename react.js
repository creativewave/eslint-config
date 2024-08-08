
module.exports = {
    extends: ['@cdoublev/eslint-config'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        '@stylistic/js/jsx-quotes': ['warn', 'prefer-single'],
        'react/default-props-match-prop-types': 'warn',
        'react/display-name': 'warn',
        'react/jsx-child-element-spacing': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/jsx-curly-newline': 'warn',
        'react/jsx-curly-spacing': 'warn',
        'react/jsx-equals-spacing': 'warn',
        'react/jsx-first-prop-new-line': 'warn',
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-unknown-property': 'warn',
        'react/no-unused-prop-types': 'warn',
        'react/require-default-props': 'warn',
        'react/sort-default-props': 'warn',
        'react/sort-prop-types': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'warn',
    },
    settings: {
        react: { version: 'detect' },
    },
}
