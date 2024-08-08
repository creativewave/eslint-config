
module.exports = {
    env: { jest: true },
    extends: ['@cdoublev/eslint-config'],
    rules: {
        'jest/expect-expect': ['warn', { assertFunctionNames: ['expect*'] }],
        'jest/no-commented-out-tests': 'warn',
        'jest/no-deprecated-functions': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'warn',
        'jest/no-identical-title': 'warn',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-equality-matcher': 'warn',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-to-throw-message': 'warn',
        'jest/valid-describe-callback': 'warn',
        'jest/valid-expect': 'warn',
        'jest/valid-expect-in-promise': 'warn',
        'jest/valid-title': 'warn',
    },
}
