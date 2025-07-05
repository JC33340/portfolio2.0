import SectionHeader from '../../components/SectionHeader'
import ProjectItem from './ProjectItem'
import type { technologyType } from '../../components/icons/TechnologyIcon'

type projectItemType = {
    name: string
    description: string[]
    technologies: technologyType[]
    photos: string[]
    link?: string
    github: string
}

const Projects = () => {
    const projectList: projectItemType[] = [
        {
            name: 'Budgeter',
            description: [
                'Developed a full-stack budgeting platform.',
                'Integrated JWT authentication with RESTful API to ensure secure data interactions.',
                'Implemented middleware driven input validation to maintain data integrity.',
                'Designed an intuitive UI with data visualization (pie charts, graphs) for financial insights',
                'Built a fully responsive UI optimized for seamless mobile and desktop experiences.',
            ],
            technologies: [
                'React',
                'TypeScript',
                'Tailwind',
                'NodeJS',
                'MySQL',
            ],
            photos: [
                '/projectPics/budgeter3.png',
                '/projectPics/budgeter.png',
                '/projectPics/budgeter2.png',
            ],
            link: 'https://budget-frontend-production.up.railway.app/auth/login',
            github: 'https://github.com/JC33340/budget-frontend',
        },
        {
            name: 'CV builder app',
            description: [
                'Developed a dynamic web application using React, enabling users to craft professional CVs eﬀortlessly.',
                'Integrated ReactPDF to generate high-quality, downloadable PDF resumes tailored to user input.',
                'Implemented a live preview feature, allowing users to visualize their CVs before finalizing.',
            ],
            technologies: ['React', 'TypeScript', 'Tailwind'],
            photos: [
                '/projectPics/cv-builder1.png',
                '/projectPics/cv-builder2.png',
            ],
            link: 'https://cvbuilder2-q33qjdty3-jc33340s-projects.vercel.app/',
            github: 'https://github.com/JC33340/CVbuilder2',
        },
        {
            name: 'Minigames app',
            description: [
                'Created a web-based game suite featuring Tic-Tac-Toe, Wordle, Minesweeper and more.',
                'Implemented reusable components to maintain clean, scalable code across multiple games.',
                'Added score tracking for Tic-Tac-Toe and diﬃculty levels for Minesweeper, enhancing user engagement.',
                'Designed a responsive, interactive UI with button animations and mobile-friendly layouts.',
            ],
            technologies: ['React', 'TypeScript', 'Tailwind'],
            photos: [
                '/projectPics/minigames1.png',
                '/projectPics/minigames2.png',
                '/projectPics/minigames3.png',
            ],
            link: 'https://minigames-mu.vercel.app/minesweeper',
            github: 'https://github.com/JC33340/minigames',
        },
        {
            name: 'Real time chat app',
            description: [
                'Engineered chat application leveraging Django’s built-in WebSocket and authentication systems.',
                'Implemented secure private messaging with real-time data handling and storage via Django models.',
                'Ensured user authentication and data protection, creating a seamless and secure communication platform.',
            ],
            technologies: ['HTML', 'CSS', 'Django'],
            photos: ['/projectPics/chatapp1.png', '/projectPics/chatapp2.png'],
            github: 'https://github.com/JC33340/chat',
        },
    ]

    return (
        <div className="bg-grayblue text-platinum min-h-screen flex flex-col items-center p-8 gap-y-20">
            <SectionHeader text="Projects" />
            <div className="flex flex-col gap-y-30 w-full">
                {projectList.map((item, i) => (
                    <ProjectItem key={i} item={item} />
                ))}
            </div>
        </div>
    )
}

export type { projectItemType }

export default Projects
