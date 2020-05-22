
module.exports = {
    env: { node: true },
    extends: ['@cdoublev/eslint-config', 'plugin:node/recommended'],
    rules: { 'node/no-mixed-requires': 'warn' }
}
