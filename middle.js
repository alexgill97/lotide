const middle = function(arr) {
  if (arr.length < 3) return [];
  if (arr.length % 2 !== 0) return [arr[Math.floor(arr.length / 2)]];
  return [(arr.length / 2), (arr.length / 2) + 1];
};

module.exports = middle

