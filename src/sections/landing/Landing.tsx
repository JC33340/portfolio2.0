import WebsiteLinks from './WebsiteLinks'
import Photo from './Photo'
import Arrow from './Arrow'
import { useContext } from 'react'
import { portfolioContext } from '../../App'

const Landing = () => {
    const { aboutRef } = useContext(portfolioContext)
    return (
        <div className="bg-linear-to-b from-grayblue to-darkgray from-60% h-screen relative">
            <div className="flex flex-col md:flex-row gap-y-10 justify-start md:justify-between w-full h-full items-center">
                <div className="text-white flex items-center flex-col gap-y-4 w-full md:h-full justify-center p-8 md:p-0">
                    <div className="flex flex-col gap-y-2 items-center justify-center animate-fadeIn text-platinum">
                        <p className="font-bold text-6xl sm:text-7xl text-center">
                            Hi, I'm Jason
                        </p>
                        <p className="text-2xl opacity-50 ">
                            Software Developer
                        </p>
                    </div>
                    <WebsiteLinks />
                </div>
                <div className="flex items-center justify-center md:h-full w-full animate-fadeIn">
                    <Photo />
                </div>
            </div>
            <div className="absolute bottom-[5%] animate-fadeIn w-full flex items-center justify-center">
                <div
                    onClick={() =>
                        aboutRef?.current?.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'start',
                        })
                    }
                >
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default Landing
