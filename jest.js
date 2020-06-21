
module.exports = {
    env: { jest: true },
    extends: ['@cdoublev/eslint-config', 'plugin:jest/recommended'],
    rules: {
        'jest/consistent-test-it': ['warn', { fn: 'it' }],
        'jest/lowercase-name': ['warn', { ignore: ['describe'] }],
        'jest/no-alias-methods': 'warn',
        'jest/no-deprecated-functions': 'warn',
        'jest/no-duplicate-hooks': 'warn',
        'jest/prefer-to-be-null': 'warn',
        'jest/prefer-to-be-undefined': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-to-throw-message': 'warn',
        'jest/valid-title': 'warn',
    }
}
