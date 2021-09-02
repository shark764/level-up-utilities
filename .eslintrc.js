const base = require('./src/eslint-config/ts-base')(__dirname);

base.rules = {
  ...base.rules,
  '@typescript-eslint/no-var-requires': 'warn',
};

module.exports = base;
