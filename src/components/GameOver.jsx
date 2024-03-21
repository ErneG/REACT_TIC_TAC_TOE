/**
 * GameOver component
 * @param {Object} props - the props of the component
 * @param {String} props.winner - the winner of the game
 * @param {Function} props.onRestart - the function to restart the game
 * @returns {JSX.Element} - the GameOver component
 */

export default function GameOver({ winner, onRestart }) {
    return (
        <div className="justify-cente flex items-center bg-opacity-50">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-3xl font-bold">
                    {winner === null
                        ? "It's a draw!"
                        : `Player ${winner} wins!`}
                </h1>
                <button
                    className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
                    onClick={onRestart}
                >
                    Restart
                </button>
            </div>
        </div>
    );
}
