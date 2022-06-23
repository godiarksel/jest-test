const stringLength = (string) => {
if (string.length < 1 || string.length > 10) {
  throw new Error('String must be at least one character long and not more than ten.');
} else {
  return string.length;
}
};

module.exports = stringLength;