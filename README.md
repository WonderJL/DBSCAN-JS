# DBSCAN Clustering Showcase in JavaScript

This project provides a demonstration of the **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)** algorithm implemented in JavaScript. The implementation consists of two main files:

- `DBSCAN.js`: Implements the DBSCAN clustering algorithm.
- `main.js`: Demonstrates an example usage of the DBSCAN algorithm.

## Features

- **Clustering with DBSCAN**: Groups data points into clusters based on density, identifying outliers/noise.
- **Customizable Parameters**: Allows tuning the `epsilon` (radius for neighborhood search) and `N` (minimum number of points to form a dense region).

## File Overview

### `DBSCAN.js`
This file contains the `DBSCAN` function, which implements the DBSCAN clustering algorithm:

- **Input**: Dataset (`data`), epsilon (`epsilon`), and minimum number of points (`N`).
- **Output**: A set of clusters and noise points.
- **Algorithm Flow**:
  1. Iterate through each data point.
  2. Identify its neighbors within the radius `epsilon`.
  3. Classify the point as either part of a cluster or as noise, depending on the number of neighbors.
  4. Expand clusters by checking the neighbors of neighbors if they meet the required density.

### `main.js`
This file demonstrates how to use the `DBSCAN` function. It imports `DBSCAN` from `DBSCAN.js` and applies it to a sample dataset.

## Getting Started

### Prerequisites

- **Node.js** (v12 or above)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install Node.js if not already installed. You can download it [here](https://nodejs.org/).

### Usage
1. Run the example in `main.js`:
   ```sh
   node main.js
   ```
2. The script will print the resulting clusters and noise points:
   ```
   { clusters: [ [ 0, 1 ], [ 2, 3 ] ], noise: [ 4 ] }
   ```

## Parameters
- **`epsilon`** (`number`): Radius to determine the neighborhood of a point. A higher value of `epsilon` means more points will be considered as neighbors.
- **`N`** (`number`): Minimum number of points required to form a cluster. If a point has fewer than `N` neighbors, it will be classified as noise.

## Example
The following example demonstrates clustering with a simple dataset:

```js
const DBSCAN = require('./DBSCAN');

const data = [
  [1, 1],
  [2, 3],
  [4, 0],
  [5, 2],
  [8, 7]
];

const result = DBSCAN(data, 2.5, 2);
console.log(result);
```

## Acknowledgements
- **DBSCAN**: A powerful clustering algorithm for identifying clusters of varying shape and detecting outliers.
