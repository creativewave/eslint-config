
module.exports = {
    env: { node: true },
    extends: ['@cdoublev/eslint-config'],
    rules: {
        'node/no-deprecated-api': 'warn',
        'node/no-exports-assign': 'warn',
        'node/no-extraneous-import': 'warn',
        'node/no-extraneous-require': 'warn',
        'node/no-missing-import': 'warn',
        'node/no-missing-require': 'warn',
        'node/no-mixed-requires': 'warn',
        'node/no-unpublished-bin': 'warn',
        'node/no-unpublished-import': 'warn',
        'node/no-unpublished-require': 'warn',
        'node/no-unsupported-features/es-builtins': 'warn',
        'node/no-unsupported-features/es-syntax': 'warn',
        'node/no-unsupported-features/node-builtins': 'warn',
        'node/process-exit-as-throw': 'warn',
        'node/shebang': 'warn',
    }
}
