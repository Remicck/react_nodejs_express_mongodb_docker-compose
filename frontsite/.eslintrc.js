module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "no-underscore-dangle": [
      "error",
      { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
    ],
    "no-underscore-dangle": ["error", { "allow": ["_id"]}],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
  }
};
