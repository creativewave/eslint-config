
module.exports = {
    env: { es6: true },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaFeatures: { impliedStrict: true },
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: ['compat'],
    rules: {
        // Best practices
        'dot-location': ['warn', 'property'],
        'dot-notation': 'warn',
        'no-else-return': 'warn',
        'no-floating-decimal': 'warn',
        'no-loop-func': 'warn',
        // 'no-magic-numbers': 'warn', <- Prevents using default value for destructured object properties
        'no-multi-spaces': ['warn', {
            'exceptions': {
                'ImportDeclaration': true,
                'Property': true,
                'VariableDeclarator': true,
            }
        }],
        'no-sequences': 'warn',
        // Stylistic issues
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': 'warn',
        'array-element-newline': ['warn', 'consistent'],
        'block-spacing': 'warn',
        'brace-style': 'warn',
        'camelcase': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'eol-last': 'warn',
        'func-call-spacing': 'warn',
        'func-names': ['warn', 'as-needed'],
        // 'function-paren-newline': ['warn', 'consistent'], <- Prevents clarity, most of the time.
        'indent': ['warn', 4, { MemberExpression: 'off', SwitchCase: 1 }],
        'key-spacing': ['warn', { mode: 'minimum' }],
        'keyword-spacing': 'warn',
        'linebreak-style': 'warn',
        // 'max-len': 'warn', <- Too hard to respect, even with 120 characters.`
        'max-params': ['warn', { 'max': 4 }],
        // 'new-cap': 'warn', <- Prevents calling a module method, eg. `return Maybe.Just('...')`
        'new-parens': 'warn',
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'warn',
        'no-negated-condition': 'warn',
        'no-trailing-spaces': 'warn',
        'object-curly-newline': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'operator-assignment': 'warn',
        'operator-linebreak': ['warn', 'before'],
        'quotes': ['warn', 'single', { avoidEscape: true }],
        'semi': ['warn', 'never'],
        'sort-keys': 'warn',
        'sort-vars': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', { named: 'never' }],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'switch-colon-spacing': 'warn',
        'template-tag-spacing': 'warn',
        // ECMAScript 6
        'arrow-body-style': 'warn',
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': 'warn',
        'generator-star-spacing': ['warn', 'after'],
        'no-duplicate-imports': 'warn',
        'no-useless-computed-key': 'warn',
        'object-shorthand': 'warn',
        'prefer-arrow-callback': 'warn',
        'prefer-const': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-template': 'warn',
        'rest-spread-spacing': 'warn',
        'sort-imports': 'warn',
        'template-curly-spacing': 'warn',
        'yield-star-spacing': 'warn',
        // Plugins
        'compat/compat': 'warn',
    },
}
