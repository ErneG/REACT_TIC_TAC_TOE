import GameOver from './GameOver';
import React from 'react';

/**
 * GameStatus component
 * @param {Object} props - the props of the component
 * @param {Boolean} props.gameOver - the game over state
 * @param {String} props.winner - the winner of the game
 * @param {String} props.player - the current player
 * @param {Function} props.onRestart - the function to restart the game
 * @returns {JSX.Element} - the GameStatus component
 */
const GameStatus = ({
    gameOver,
    winner,
    player,
    onRestart
}) => {
    const Status = () => {
        if (gameOver) {
            return (
                <GameOver
                    winner={winner}
                    onRestart={onRestart}
                />
            );
        } else {
            return (
                <h1 className="text-2xl">
                    Current turn: {player}
                </h1>
            );
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <Status />
        </div>
    );
};

export default GameStatus;
