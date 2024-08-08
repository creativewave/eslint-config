
# ESLint configuration

Minimal ESLint rule presets:

  - `@cdoublev/eslint-config`: to lint (ES6+) files executed anywhere
  - `@cdoublev/eslint-config/node`: to lint files executed in NodeJS
  - `@cdoublev/eslint-config/browser`: to lint files executed in a browser
  - `@cdoublev/eslint-config/jest`: to lint files executed in Jest
  - `@cdoublev/eslint-config/react`: to lint files executed in React

**Usage**

Simply add the required configurations to the main export of `eslint.config.js`. For example, in a server side rendered React application, tested with Jest:

```js
// eslint.config.js

const common = require('@cdoublev/eslint-config')
const browser = require('@cdoublev/eslint-config/browser')
const jest = require('@cdoublev/eslint-config/jest')
const node = require('@cdoublev/eslint-config/node')
const react = require('@cdoublev/eslint-config/react')

module.exports = [
  common,
  jest, // Looks for __tests__/**/*.js, tests/**/*.js, **/*.test.js
  react,
  { ...node, files: ['server/**/*.js'] },
  { ...browser, files: ['src/**/*.js'] },
]
```

The following dependencies may need to be installed depending on the configuration:

  - [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) for `@cdoublev/eslint-config/browser`
  - [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n) for `@cdoublev/eslint-config/node`
  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://reactjs.org/docs/hooks-rules.html#eslint-plugin) for `@cdoublev/eslint-config/react`
  - [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) for `@cdoublev/eslint-config/jest`
  - [`globals`](https://github.com/sindresorhus/globals) for `@cdoublev/eslint-config/node` and `@cdoublev/eslint-config/react`

**How rules are selected?**

  - they must be as few as possible to detect errors (tests already exist for this)
  - they must be otherwise related to spacing, line breaks, code complexity
  - they must not increase code complexity
  - they must be widely accepted by the JS community

This [document](https://docs.google.com/spreadsheets/d/1yPd3sRYB1A81YxMk06ckDMLhZgFYyO66Z0gIVhITBgQ/) provides some comments about each rule. If a rule exists in this document and is not activated, it will never be.
