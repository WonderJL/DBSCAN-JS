// DBSCAN.js
const distances = require("./distances");

function DBSCAN(data, epsilon = 0.5, N = 3) {
  const visited = []; // List to keep track of visited points
  const noise = []; // List to collect noise points (outliers)
  const clusters = []; // List to collect clusters

  // Iterate through all points in the dataset
  for (let i = 0; i < data.length; i++) {
    if (!visited.includes(i)) {
      // If the point has not been visited
      visited.push(i); // Mark the point as visited
      const d = distances(data[i], data); // Calculate distances from the current point to all other points

      // Find neighbors within the epsilon radius (excluding the point itself)
      const neighbors = d.reduce((acc, dist, idx) => {
        if (dist <= epsilon && dist !== 0) {
          acc.push(idx);
        }
        return acc;
      }, []);

      if (neighbors.length < N) {
        // If the number of neighbors is less than N, mark it as noise
        noise.push(i);
      } else {
        // Otherwise, create a new cluster
        const cluster = [i];
        for (let j = 0; j < neighbors.length; j++) {
          const neighbor = neighbors[j];

          if (!visited.includes(neighbor)) {
            // If the neighbor hasn't been visited
            visited.push(neighbor); // Mark neighbor as visited
            const dNeighbor = distances(data[neighbor], data); // Calculate distances from the neighbor to all other points

            // Find neighbors of the neighbor within the epsilon radius (excluding itself)
            const neighborsIdx = dNeighbor.reduce((acc, dist, idx) => {
              if (dist <= epsilon && dist !== 0) {
                acc.push(idx);
              }
              return acc;
            }, []);

            // If the neighbor has N or more neighbors, it is a core point
            if (neighborsIdx.length >= N) {
              neighbors.push(...neighborsIdx); // Add these neighbors to the list of neighbors to be processed
            }
          }

          // Add the neighbor to the cluster if it is not already part of any cluster
          if (
            !cluster.some((c) =>
              clusters.some((cluster) => cluster.includes(c))
            )
          ) {
            cluster.push(neighbor);
          }
        }
        clusters.push(cluster); // Add the newly formed cluster to the list of clusters
      }
    }
  }

  return { clusters, noise }; // Return the clusters and noise points
}

// Export the DBSCAN function
module.exports = DBSCAN;