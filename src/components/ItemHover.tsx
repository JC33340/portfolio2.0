import { motion } from 'motion/react'

type ItemHoverType = {
    children: React.ReactNode
    hoverText?: string
    handleClick?: () => void
    className?: string
}

const ItemHover = ({
    children,
    hoverText,
    handleClick,
    className,
}: ItemHoverType) => {
    return (
        <motion.div
            className={`flex flex-col relative items-center opacity-60 hover:opacity-100 ${className}`}
            initial="hidden"
            whileHover="visible"
            onClick={handleClick}
        >
            {children}
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                className="absolute bottom-[-2.2em] text-sm whitespace-nowrap bg-lightgray p-1 rounded-lg"
            >
                <p className="w-fit">{hoverText}</p>
            </motion.div>
        </motion.div>
    )
}

export default ItemHover
