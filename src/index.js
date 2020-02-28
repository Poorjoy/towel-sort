module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.flatMap((c, i) => i % 2 === 0 ? c : c.reverse());
}
