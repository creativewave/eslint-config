
module.exports = {
    env: { browser: true },
    extends: ['@cdoublev/eslint-config'],
    plugins: ['compat'],
    rules: {
        'compat/compat': 'warn',
    },
}
