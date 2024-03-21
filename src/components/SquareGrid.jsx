import Square from './Square';

/**
 * SquareGrid component.
 * @param {Object} props - the props of the component
 * @param {Array} props.values - the values of the grid
 * @param {Function} props.onClick - the function to handle the click event
 * @returns {JSX.Element} - the SquareGrid component
 */
export default function SquareGrid({ values, onClick }) {
    return (
        <div className="grid grid-cols-3 gap-2">
            {values.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
}
