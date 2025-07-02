import techIndex from './techIndex'
import { motion } from 'motion/react'

type technologyType =
    | 'JavaScript'
    | 'TypeScript'
    | 'React'
    | 'NodeJS'
    | 'ExpressJS'
    | 'NextJS'
    | 'HTML'
    | 'CSS'
    | 'Tailwind'
    | 'MySQL'
    | 'Python'
    | 'Django'
    | 'Flask'

type TechnologyIconType = {
    tech: technologyType
}

const TechnologyIcon = ({ tech }: TechnologyIconType) => {
    //finding the correct svg to display
    const obj = techIndex.filter((item) => item.name === tech)
    let display: React.ReactNode
    if (obj.length > 0) {
        console.log(obj)
        display = obj[0].svg
    }

    return (
        <motion.div
            initial="none"
            whileHover="hover"
            variants={{
                none: { scale: 1 },
                hover: { scale: 1.5, zIndex: 10 },
            }}
            className="h-10 relative flex flex-col items-center"
        >
            {display}
            <motion.div
                className="absolute bottom-[-2.5em] bg-darkgray rounded-lg py-1 px-3"
                variants={{
                    none: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
            >
                <p>{tech}</p>
            </motion.div>
        </motion.div>
    )
}

export type { technologyType }

export default TechnologyIcon
