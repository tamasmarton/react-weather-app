module.exports = {
  '*.{js,ts,tsx}': ['eslint --quiet --cache --fix'],
  '*.{json,js,ts,jsx,tsx,html}': ['prettier --write'],
}
