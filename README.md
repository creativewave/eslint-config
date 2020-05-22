
# ESLint configuration

**How to use a configuration:**

Append its identifier to the `extend` property of the ESLint configuration file:

- `@cdoublev/eslint-config`: to lint (ES6+) files used everywhere (extended by all configurations below)
- `@cdoublev/eslint-config/node`: to lint files executed in NodeJS
- `@cdoublev/eslint-config/browser`: to lint files executed in a browser
- `@cdoublev/eslint-config/react`: to lint React files executed in a browser
- `@cdoublev/eslint-config/react-ssr`: to lint React files executed both in a browser and NodeJS

**How rules are selected?**

Set up a linter to detect as many errors as possible is often counterproductive: the runtime and unit/integration tests are already detecting errors which can be easily fixed, and an infinite number of error situations might exist and be suitable for adding (an infinite number of) new rules. Therefore selected rules:

- should not be already in eslint:recommended or plugin:[plugin-name]/recommended
- should be as few as possible to detect errors
- should be otherwise related to spacing, line breaks, code clarity, and (performance) optimization
- should not prevent code clarity
- should be widely accepted by the JS community
