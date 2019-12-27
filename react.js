
module.exports = {
    env: { browser: true, jest: true },
    extends: ['@cdoublev/eslint-config', '@cdoublev/eslint-config/browser', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'jsx-quotes': ['warn', 'prefer-single'],
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/no-unescaped-entities': ['warn', { forbid: [
            { char: '>', alternatives: ['&gt;'] },
            { char: '}', alternatives: ['&#125;'] },
        ]}],
    },
    settings: {
        react: { version: 'detect' },
    },
}
