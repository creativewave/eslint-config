
const compat = require('eslint-plugin-compat')
const { node: globals } = require('globals')

module.exports = {
    ...compat.configs['flat/recommended'],
    languageOptions: { globals },
    name: '@cdoublev/eslint-config/jest',
}
