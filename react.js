const path = require('path');

module.exports = {
  extends: [ path.join(__dirname, 'index.js'), "plugin:react/recommended" ],
  plugins: [ "react" ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  },
};
