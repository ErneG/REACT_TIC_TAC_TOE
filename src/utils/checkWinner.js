/**
 * Check if there is a winner
 * @param {Array} values - the current state of the game
 * @returns {String} - the winner of the game
 * @returns {null} - if there is no winner
 *
 * @example
 * // returns 'X'
 * checkWinner(['X', 'X', 'X', 'O', 'O', null, null, null, null]);
 */
export default function checkWinner(values) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // columns

        [0, 4, 8],
        [2, 4, 6] // diagonals
    ];
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            values[a] &&
            values[a] === values[b] &&
            values[a] === values[c]
        ) {
            return values[a];
        }
    }
    return null;
}
