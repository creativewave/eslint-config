
module.exports = {
    env: { es2022: true },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaFeatures: { impliedStrict: true },
        sourceType: 'module',
    },
    rules: {
        // Best practices
        'dot-location': ['warn', 'property'],
        'no-else-return': 'warn',
        'no-floating-decimal': 'warn',
        'no-multi-spaces': ['warn', {
            'exceptions': {
                ImportDeclaration: true,
                Property: true,
                VariableDeclarator: true,
            }
        }],
        // Stylistic issues
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': 'warn',
        'array-element-newline': ['warn', 'consistent'],
        'block-spacing': 'warn',
        'brace-style': 'warn',
        'camelcase': ['warn', { ignoreGlobals: true, ignoreImports: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'eol-last': 'warn',
        'func-call-spacing': 'warn',
        'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
        'function-call-argument-newline': ['warn', 'consistent'],
        'indent': ['warn', 4, { MemberExpression: 'off', SwitchCase: 1 }],
        'jsx-quotes': 'warn',
        'key-spacing': ['warn', { mode: 'minimum' }],
        'keyword-spacing': 'warn',
        'linebreak-style': 'warn',
        'logical-assignment-operators': 'warn',
        'max-params': ['warn', { 'max': 4 }],
        'multiline-comment-style': 'warn',
        'new-cap': ['warn', { capIsNew: false, properties: true }],
        'new-parens': 'warn',
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'warn',
        'no-negated-condition': 'warn',
        'no-trailing-spaces': 'warn',
        'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        'no-whitespace-before-property': 'warn',
        'object-curly-newline': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'operator-assignment': 'warn',
        'operator-linebreak': ['warn', 'before', { overrides: { '=': 'after' } }],
        'prefer-object-spread': 'warn',
        'quote-props': ['warn', 'consistent-as-needed'],
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
        'object-shorthand': 'warn',
        'prefer-arrow-callback': 'warn',
        'prefer-const': ['warn', { destructuring: 'all' }],
        'prefer-template': 'warn',
        'rest-spread-spacing': 'warn',
        'sort-imports': 'warn',
        'template-curly-spacing': 'warn',
        'yield-star-spacing': 'warn',
    },
}
