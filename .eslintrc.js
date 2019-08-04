module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["ember"],
  extends: ["eslint:recommended", "plugin:ember/recommended"],
  env: {
    browser: true
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/*/index.js",
        "server/**/*.js",
        "tests/helpers/**/*.js",
        "tests/integration/**/*.js",
        "tests/unit/**/*.js"
      ],
      parserOptions: {
        sourceType: "module"
      },
      env: {
        browser: false,
        node: true,
        es6: true
      },
      plugins: ["node"],
      rules: {
        "node/no-unpublished-require": "off"
      }
    }
  ]
};
