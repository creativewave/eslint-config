
module.exports = {
    extends: [
        '@cdoublev/eslint-config',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
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
