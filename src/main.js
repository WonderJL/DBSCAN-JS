// main.js
const DBSCAN = require("./DBSCAN");

// Example usage
const data = [
  [1, 1],
  [2, 3],
  [4, 0],
  [5, 2],
  [8, 7]
];

const result = DBSCAN(data, 2.5, 2);
console.log(result);