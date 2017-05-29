# eslint-config-lechaudron-studio [![npm version](https://badge.fury.io/js/eslint-config-lechaudron-studio.svg)](https://badge.fury.io/js/eslint-config-lechaudron-studio)

ESLint's rules used by LeChaudron Studio.

## Available rulesets
* eslint-config-lechaudron-studio
  * Common rules without React support
* eslint-config-lechaudron-studio/react
  * Extends the common rules to add React support

## Usage
1. Install the package and its peer dependencies
```bash
npm i -D eslint eslint-plugin-babel eslint-config-lechaudron-studio
```

2. Use one of the rulesets in your `.eslintrc`. e.g. for React:
```json
{
  "extends": "eslint-config-lechaudron-studio/react"
}
```

3. When using `eslint-config-lechaudron-studio/react`, the following
peer dependency  is also required: `eslint-plugin-react`
```bash
npm i -D eslint-plugin-react
```
