import type { projectItemType } from './Projects'
import SmallHeader from '../../components/SmallHeader'
import TechnologyIcon from '../../components/icons/TechnologyIcon'
import { motion } from 'motion/react'

type ProjectItemComponentType = {
    item: projectItemType
}

const ProjectItem = ({ item }: ProjectItemComponentType) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3, once: true }}
            className="flex even:flex-col even:lg:flex-row-reverse flex-col lg:flex-row gap-y-4 justify-center gap-x-6"
        >
            <div className="w-full flex items-center justify-center">
                <div className="carousel carousel-center bg-darkgray w-full lg:w-[95%] rounded-lg gap-x-10 p-4 shadow-xl">
                    {item.photos.map((photo, i) => (
                        <div
                            key={i}
                            className={`carousel-item ${item.photos.length > 1 ? 'w-[80%]' : 'w-full'}`}
                        >
                            <img src={photo} className="rounded-lg"></img>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col gap-y-4 ">
                <SmallHeader text={item.name} />
                <div className="opacity-70 text-justify flex flex-col gap-y-2 ">
                    {item.description.map((line, i) => (
                        <p key={i}>&#x2022; {line}</p>
                    ))}
                </div>
                <div className="flex flex-col gap-y-4 md:flex-row gap-x-4">
                    <div className="flex gap-x-4 bg-purplegray py-2 px-4 rounded-lg w-fit shadow-xl">
                        {item.technologies.map((tech, i) => (
                            <TechnologyIcon key={i} tech={tech} />
                        ))}
                    </div>
                    <div className="items-center justify-center py-2 px-4 rounded-lg shadow-xl flex gap-x-4 bg-purplegray w-fit">
                        <a
                            href={item.github}
                            target="_blank"
                            className="opacity-50 hover:opacity-100 transition-all ease-in-out"
                        >
                            <svg viewBox="0 0 24 24" width={40} fill="none">
                                <path
                                    className="stroke-platinum"
                                    d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                                ></path>
                            </svg>
                        </a>
                        {item.link && (
                            <a
                                target="_blank"
                                href={item.link}
                                className="opacity-50 hover:opacity-100 transition-all ease-in-out"
                            >
                                <svg viewBox="0 0 24 24" fill="none" width={40}>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H9M15 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H15M7 12L17 12"
                                            className="stroke-platinum"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{' '}
                                    </g>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectItem
