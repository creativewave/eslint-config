
# ESLint configuration

**How to use a configuration:**

Append its identifier to the `extends` property of the ESLint configuration file:

- `@cdoublev/eslint-config`: to lint (ES6+) files used everywhere (extended by all configurations below)
- `@cdoublev/eslint-config/node`: to lint files executed in NodeJS
- `@cdoublev/eslint-config/browser`: to lint files executed in a browser
- `@cdoublev/eslint-config/react`: to lint React files executed in a browser
- `@cdoublev/eslint-config/react-ssr`: to lint React files executed both in a browser and NodeJS

**Optional dependencies:**

[`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) is used to detect and report usage of unsupported `browser` interfaces that should be listed in `settings.polyfills` in the ESLint project configuration file, in order to fix related warning(s).

[`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node) is used to add rules specific to NodeJS, that was removed in ESLint in v7.

[`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://reactjs.org/docs/hooks-rules.html#eslint-plugin) are used to add rules specific to `react`.

**How rules are selected?**

Set up a linter to detect as many errors as possible is often counterproductive: the runtime and unit/integration tests are already detecting errors which can be easily fixed, and an infinite number of error situations might exist and be suitable for adding (an infinite number of) new rules. Therefore selected rules:

- should not be already in eslint:recommended or plugin:[plugin-name]/recommended
- should be as few as possible to detect errors
- should be otherwise related to spacing, line breaks, code clarity, and (performance) optimization
- should not prevent code clarity
- should be widely accepted by the JS community

This [document](https://docs.google.com/spreadsheets/d/1yPd3sRYB1A81YxMk06ckDMLhZgFYyO66Z0gIVhITBgQ/) provides some comments about each rule. If a rule exists in this document and is not activated, it will never be.
