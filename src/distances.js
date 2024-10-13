// distances.js
function distances(object, data) {
  const euclidean = [];

  // Calculate the Euclidean distance from the given object to every point in the data
  data.forEach((row) => {
    let d = 0;

    // Sum the squared differences for each coordinate
    for (let i = 0; i < row.length; i++) {
      d += Math.pow(row[i] - object[i], 2);
    }

    // Take the square root of the sum to get the Euclidean distance
    euclidean.push(Math.sqrt(d));
  });

  return euclidean;
}

// Export the distances function
module.exports = distances;
