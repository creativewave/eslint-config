
module.exports = {
    env: { node: true },
    extends: ['@cdoublev/eslint-config'],
    rules: {
        'node/no-deprecated-api': 'warn',
        'node/no-unsupported-features/es-builtins': 'warn',
        'node/no-unsupported-features/es-syntax': 'warn',
        'node/no-unsupported-features/node-builtins': 'warn',
    }
}
