
module.exports = {
    env: { jest: true },
    extends: ['@cdoublev/eslint-config', 'plugin:jest/recommended'],
    rules: {
        'jest/consistent-test-it': ['warn', { fn: 'it' }],
        'jest/expect-expect': ['warn', { assertFunctionNames: ['expect*'] }],
        'jest/no-alias-methods': 'warn',
        'jest/no-deprecated-functions': 'warn',
        'jest/no-duplicate-hooks': 'warn',
        'jest/prefer-lowercase-title': ['warn', { ignore: ['describe'] }],
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-to-throw-message': 'warn',
        'jest/valid-title': 'warn',
    }
}
