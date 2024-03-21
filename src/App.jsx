import SquareGrid from './components/SquareGrid';
import GameStatus from './components/GameStatus';
import checkWinner from './utils/checkWinner';

import { useEffect, useState } from 'react';

const App = () => {
    const [values, setValues] = useState(
        Array(9).fill(null)
        /**
         * Creates an array of 9 null values. Null represents an empty square.
         * The difference between null and undefined is that null is a value that represents "no value" while undefined is a value that represents "no value yet".
         * Null is a value set by the programmer, while undefined is a value set by JavaScript.
         */
    );
    const [player, setPlayer] = useState(
        Math.random() < 0.5 ? 'X' : 'O' // randomly choose the first player. Math.random() generates a random number between 0 and 1
    );
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);

    /**
     * Function to check if the game is a draw
     * @param {Array} values - the current state of the game
     * @param {String} winner - the winner of the game
     * @returns {Boolean} - true if the game is a draw, false otherwise
     */
    const isDraw = (values, winner) => {
        const noNullValues = !values.includes(null);
        const noWinner = winner === null;
        const isDraw = noNullValues && noWinner;
        return isDraw;
    };

    /**
     * Function to check if there is a winner after each turn
     * useEffect is a hook that allows us to perform side effects in function components
     * that just means that every time the `values` array changes, the function inside useEffect will run
     */
    useEffect(() => {
        const winner = checkWinner(values);
        setWinner(winner);
        if (winner || isDraw(values, winner)) {
            // if there is a winner or the game is a draw, set the game over
            setGameOver(true);
        }
    }, [values]);

    // Function to change the player after each turn
    const changePlayer = () => {
        setPlayer(player === 'X' ? 'O' : 'X');
    };

    /**
     * Function to handle the click event on each square
     * @param {Number} index - the index of the square that was clicked
     */
    const handleClick = (index) => {
        if (gameOver) return; // if the game is over, do nothing

        const newValues = [...values]; // `...` is the spread operator - it allows us to copy the array
        if (newValues[index] !== null) return; // if the square is already filled, do nothing
        newValues[index] = player; // set the value of the square to the current player

        changePlayer(); // change the player after each turn
        setValues(newValues); // update the game state with the new values
    };

    /**
     * Function to restart the game
     */
    const restartGame = () => {
        setValues(Array(9).fill(null)); // resets the game state to an empty board
        setPlayer(Math.random() < 0.5 ? 'X' : 'O'); // randomly choose the first player
        setGameOver(false);
    };

    /**
     * The main function that renders the game
     */
    return (
        <main className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-[#050505] text-white">
            <GameStatus
                gameOver={gameOver}
                winner={winner}
                player={player}
                onRestart={restartGame}
            />
            <SquareGrid
                values={values}
                onClick={handleClick}
            />
        </main>
    );
};

export default App;
