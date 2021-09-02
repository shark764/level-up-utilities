const base = require('./base');

module.exports = function getTSBaseConfig (dirname) {
  base.extends = [
    'airbnb-base',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier',
    'standard-with-typescript',
  ];

  base.parser = '@typescript-eslint/parser';
  base.parserOptions = {
    tsconfigRootDir: dirname,
    project: ['tsconfig.eslint.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  };
  base.plugins = ['@typescript-eslint'];
  base.rules = {
    ...base.rules,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
        multilineDetection: 'brackets',
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-var-requires': 'warn',
    'comma-dangle': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unused-modules': 'off',
    indent: 'off',
    'no-empty-function': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    semi: 'off',
  };

  base.settings = {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  };

  return base;
};
