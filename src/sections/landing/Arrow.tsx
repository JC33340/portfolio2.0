import { FaArrowDown } from 'react-icons/fa'

const Arrow = () => {
    return (
        <div className="animate-bounce opacity-30 hover:opacity-100 transition-opacity ease-in-out duration-500">
            <FaArrowDown className="fill-platinum" size={50} />
        </div>
    )
}

export default Arrow
