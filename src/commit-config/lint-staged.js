// lint-staged.config.js
module.exports = {
  './**/*.{js,jsx,ts,tsx}': ['yarn run prettify'],
  'src/**/*.{js,jsx,ts,tsx}': [() => 'tsc --noEmit'],
};
