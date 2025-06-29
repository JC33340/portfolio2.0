import WebsiteLinks from './WebsiteLinks'
import Photo from './photo'
import Arrow from './Arrow'

const Landing = () => {
    return (
        <div className="bg-grayblue h-screen relative">
            <div className="grid grid-cols-2 w-full h-full items-center justify-center">
                <div className="text-white flex items-center flex-col gap-y-4 w-full h-full justify-center">
                    <div className="flex flex-col gap-y-2 items-center justify-center animate-fadeIn text-platinum">
                        <p className="font-bold text-7xl">Hi, I'm Jason</p>
                        <p className="text-2xl opacity-50 ">
                            Software developer
                        </p>
                    </div>
                    <WebsiteLinks />
                </div>
                <div className="flex items-center justify-center h-full w-full animate-fadeIn">
                    <Photo />
                </div>
            </div>
            <div className="absolute bottom-[5%] animate-fadeIn w-full flex items-center justify-center">
                <div>
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default Landing
