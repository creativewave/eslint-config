
module.exports = {
    env: { node: true },
    extends: ['@cdoublev/eslint-config'],
    rules: {
        'n/file-extension-in-import': 'warn',
        'n/no-deprecated-api': 'warn',
        'n/no-unsupported-features/es-builtins': 'warn',
        'n/no-unsupported-features/es-syntax': 'warn',
        'n/no-unsupported-features/node-builtins': 'warn',
        'n/prefer-node-protocol': 'warn',
    },
}
