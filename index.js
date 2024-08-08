
module.exports = {
    env: { es2024: true },
    parserOptions: {
        ecmaFeatures: { impliedStrict: true },
        sourceType: 'module',
    },
    rules: {
        // Best practices
        'camelcase': ['warn', { ignoreGlobals: true, ignoreImports: true }],
        'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
        'no-case-declarations': 'warn',
        'no-else-return': 'warn',
        'no-floating-decimal': 'warn',
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'warn',
        'no-negated-condition': 'warn',
        'object-shorthand': 'warn',
        'prefer-arrow-callback': 'warn',
        'prefer-template': 'warn',
        'quote-props': ['warn', 'consistent-as-needed'],
        'sort-imports': 'warn',
        'sort-keys': 'warn',
        // Errors
        'no-debugger': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-duplicate-imports': 'warn',
        'no-irregular-whitespace': 'warn',
        'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        // Style
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': 'warn',
        'array-element-newline': ['warn', 'consistent'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'dot-location': ['warn', 'property'],
        'eol-last': 'warn',
        'func-call-spacing': 'warn',
        'function-call-argument-newline': ['warn', 'consistent'],
        'indent': ['warn', 4, { MemberExpression: 'off', SwitchCase: 1 }],
        'key-spacing': ['warn', { mode: 'minimum' }],
        'keyword-spacing': 'warn',
        'linebreak-style': 'warn',
        'max-statements-per-line': 'warn',
        'multiline-ternary': ['warn', 'always-multiline'],
        'no-mixed-spaces-and-tabs': 'warn',
        'no-multi-spaces': ['warn', {
            'exceptions': {
                ImportDeclaration: true,
                Property: true,
                VariableDeclarator: true,
            }
        }],
        'no-multiple-empty-lines': 'warn',
        'no-tabs': 'warn',
        'no-trailing-spaces': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': 'warn',
        'object-curly-newline': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'operator-linebreak': ['warn', 'before', { overrides: { '=': 'after' } }],
        'quotes': ['warn', 'single', { avoidEscape: true }],
        'rest-spread-spacing': 'warn',
        'semi': ['warn', 'never'],
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', { named: 'never' }],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'switch-colon-spacing': 'warn',
        'template-curly-spacing': 'warn',
        'template-tag-spacing': 'warn',
    },
}
