let minOf2 = ([a, b]) => (a < b ? a : b);

let minOf3 = ([a, b, c]) => {
  return minOf2([a, b], c);
};

let minOf4 = ([a, b, c]) => {
  return minOf2([a, b, c], d);
};
