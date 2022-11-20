
# ESLint configuration

**How to use a configuration:**

Append its identifier to the `extends` property of the ESLint configuration file:

  - `@cdoublev/eslint-config` (extended by all configurations below): to lint (ES6+) files executed anywhere
  - `@cdoublev/eslint-config/node`: to lint files executed in NodeJS
  - `@cdoublev/eslint-config/browser`: to lint files executed in a browser
  - `@cdoublev/eslint-config/jest`: to lint files executed in Jest
  - `@cdoublev/eslint-config/react`: to lint files executed in React

For example, in a React application rendered server side and tested with Jest:

```js
// .eslintrc.js
module.exports = {
  extends: ['@cdoublev/eslint-config'],
  overrides: [
    {
      files: ['__mocks__/**/*.js', '__tests__/**/*.js'],
      extends: ['@cdoublev/eslint-config/node', '@cdoublev/eslint-config/jest'],
    },
    {
      files: ['server/**/*.js'],
      extends: ['@cdoublev/eslint-config/node'],
    },
    {
      files: ['src/**/*.js'],
      extends: ['@cdoublev/eslint-config/react'],
    },
  ],
}
```

**Optional dependencies:**

The following dependencies can be required depending on the configuration.

[`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) is required when using `@cdoublev/eslint-config/browser`. It provides rules warning against the use of unsupported `browser` interfaces. These warnings can be muted by listing the corresponding interfaces in `settings.polyfills` in the ESLint project configuration file.

[`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node) is required when using `@cdoublev/eslint-config/node`. It provides specific NodeJS rules.

[`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://reactjs.org/docs/hooks-rules.html#eslint-plugin) are required when using `@cdoublev/eslint-config/react`. They provide specific `react` rules.

[`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest/) is required when using `@cdoublev/eslint-config/jest`. It provides specific `jest` rules.

**How rules are selected?**

The following conventions apply for selecting rules:

  - they must not already be included in `eslint:recommended` or `plugin:[plugin-name]/recommended`
  - they must be as few as possible to detect errors
  - they must be otherwise related to spacing, line breaks, code clarity, and (performance) optimization
  - they must not prevent code clarity
  - they must be widely accepted by the JS community

Configuring a linter to detect as many errors as possible is often counterproductive: the runtime and unit/integration tests are already responsible for this.

This [document](https://docs.google.com/spreadsheets/d/1yPd3sRYB1A81YxMk06ckDMLhZgFYyO66Z0gIVhITBgQ/) provides some comments about each rule. If a rule exists in this document and is not activated, it will never be.
