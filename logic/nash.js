function findNash(matrix) {
    let nashCells = [];

    // Step 1: Best responses for Player A (column-wise)
    let bestA = [[], []]; // for each column

    for (let col = 0; col < 2; col++) {
        let maxA = Math.max(matrix[0][col].A, matrix[1][col].A);

        for (let row = 0; row < 2; row++) {
            if (matrix[row][col].A === maxA) {
                bestA[col].push(row);
            }
        }
    }

    // Step 2: Best responses for Player B (row-wise)
    let bestB = [[], []]; // for each row

    for (let row = 0; row < 2; row++) {
        let maxB = Math.max(matrix[row][0].B, matrix[row][1].B);

        for (let col = 0; col < 2; col++) {
            if (matrix[row][col].B === maxB) {
                bestB[row].push(col);
            }
        }
    }

    // Step 3: Find intersection
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            if (
                bestA[col].includes(row) &&
                bestB[row].includes(col)
            ) {
                nashCells.push([row, col]);
            }
        }
    }

    return nashCells;
}

module.exports = findNash;