
const compat = require('eslint-plugin-compat')

module.exports = {
    ...compat.configs['flat/recommended'],
    name: '@cdoublev/eslint-config/jest',
}
