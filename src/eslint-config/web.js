const base = require('./base');

base.env = {
  ...base.env,
  browser: true,
};
base.extends = [
  'plugin:react/recommended',
  'airbnb',
  'plugin:react-hooks/recommended',
  'eslint-config-prettier',
  'eslint:recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'prettier',
];
base.plugins = [...base.plugins, 'react', 'react-hooks'];
base.rules = {
  ...base.rules,
  'jsx-a11y/click-events-have-key-events': 'warn',
  'jsx-a11y/label-has-associated-control': 'warn',
  'jsx-quotes': ['error', 'prefer-double'],
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
  'react/display-name': 'off',
  'react/jsx-curly-brace-presence': [
    'error',
    {
      props: 'never',
      children: 'never',
    },
  ],
  'react/jsx-filename-extension': [
    1,
    {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  ],
  'react/jsx-props-no-spreading': 'warn',
  'react/no-deprecated': 'warn',
  'react/prop-types': 'off',
  'react/require-default-props': 'warn',
  'react/state-in-constructor': ['error', 'always'],
};
base.settings = {
  ...(base.settings ?? {}),
  react: {
    version: 'detect',
  },
};

module.exports = base;
