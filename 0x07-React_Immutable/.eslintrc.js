module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
