import { FaRegCircle } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

/**
 * Square component
 * @param {Object} props - the props of the component
 * @param {String} props.value - the value of the square
 * @param {Function} props.onClick - the function to handle the click event
 * @param {Number} props.id - the id of the square
 * @returns {JSX.Element} - the Square component
 *
 */
export default function Square({ value, onClick, id }) {
    const Icon = () => {
        if (value === 'O') {
            return <FaRegCircle className="h-12 w-12" />;
        }
        if (value === 'X') {
            return <IoClose className="h-12 w-12" />;
        } else {
            return <div className="h-12 w-12">{value}</div>;
        }
    };

    return (
        <div
            className={`inline-flex transform items-center justify-center rounded-lg
            border-2 border-solid border-gray-700 p-2 transition hover:scale-105`}
            onClick={() => onClick(id)}
        >
            <Icon />
        </div>
    );
}
