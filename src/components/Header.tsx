import WebsiteLinks from '../sections/landing/WebsiteLinks'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'

const Header = () => {
    const { scrollY } = useScroll()

    const [isOver, setIsOver] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > window.innerHeight) {
            setIsOver(true)
        } else if (latest < window.innerHeight) {
            setIsOver(false)
        }
    })
    return (
        <motion.header
            className={`fixed w-full py-4 px-8 top-0 z-1 backdrop-blur-xl text-platinum flex justify-between ${isOver ? 'translate-0' : 'translate-y-[-100%]'} transition-all ease-in-out duration-500`}
        >
            <p className="font-bold text-2xl">Jason Chan</p>
            <WebsiteLinks />
        </motion.header>
    )
}

export default Header
