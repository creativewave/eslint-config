
# ESLint configuration

**How rules are selected?**

Setting up linters are often a big waste of time when tring to use it as a way to handle as many errors as possible: the runtime is already reporting errors that are easy to analyze and fix, and unit/integration tests are dedicated to avoid errors.

- Rules should not be in eslint:recommended already
- Rules should be as few as possible when related to sneaky errors detection
- Rules should be otherwise related to spacing, line breaks, code clarity and micro optimization, not more.
- Rules should not prevent code clarity
- Rules should be largely accepted by the JS community
