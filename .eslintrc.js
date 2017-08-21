module.exports = {
  "extends": "@ats-core/eslint-config-ats",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "no-return-assign": ["error", "except-parens"],
  },
  "overrides": {
    "files": [ "src/scripts/**/*.test.js" ],
    // the following config should be in @ats-core/eslint-config-ats, but eslint@latest
    // doesn't support "extends" for sharable configs in an eslintrc overrides section
    "plugins": [
      "mocha"
    ],
    "env": {
      "node": true,
      "mocha": true,
    },
    "globals": {
      "it": true,
      "xit": true,
      "before": true,
      "beforeEach": true,
      "after": true,
      "afterEach": true,
      "describe": true,
      "xdescribe": true,
      "sandbox": true,
      "sinon": true,
      "expect": true,
      "should": true,
      "mount": true,
      "shallow": true,
      "render": true
    },
    "rules": {
      "react/jsx-uses-react": [1],
      "no-unused-expressions": "off",
      "max-nested-callbacks": 0,
      "mocha/no-exclusive-tests": "error",
      "mocha/handle-done-callback": "off",
      "mocha/no-synchronous-tests": "off",
      "mocha/no-global-tests": "error",
      "import/no-extraneous-dependencies": "off",
      "import/extensions": ['.js', '.jsx'],
      "import/first": "off",
    }
  }
};
