import { useContext } from 'react'
import { portfolioContext } from '../../App'
import SmallHeader from '../../components/SmallHeader'
import ExperienceItem from './ExperienceItem'
import SkillsSection from './SkillSection'
import TextWrapper from './TextWrapper'
import { motion } from 'motion/react'
import type { technologyType } from '../../components/icons/TechnologyIcon'

type ExperienceItemType = {
    institute: string
    title?: string
    start?: number
    end?: number
    grade?: string
    information?: string[]
}

type SkillsType = {
    category: string
    skills: technologyType[]
}

const About = () => {
    const { aboutRef } = useContext(portfolioContext)

    const educationList: ExperienceItemType[] = [
        {
            institute: 'University College London',
            title: 'Msci Pharmacology',
            start: 2019,
            end: 2023,
            grade: '2 : 1',
        },
        {
            institute: 'HarvardX',
            end: 2023,
            title: 'CS50X Web programming with Python and JavaScript',
            information: [
                'Advanced full-stack web development course',
                'Learning Python (Django), SQLite, JavaScript, C',
                'Projects: Email, Wiki, Google Search, E-Commerce, Networking, Websocket Chat apps',
            ],
        },
        {
            institute: 'HarvardX',
            end: 2023,
            title: 'CS50 Introduction to Computer Science',
            information: [
                'Learning HTML, CSS, C, Python (Flask), JavaScript',
                'Solving problems and producing a PR tracker App (Flask, JavaScript, SQLite)',
            ],
        },
    ]

    const SkillsList: SkillsType[] = [
        {
            category: 'Frontend',
            skills: [
                'React',
                'JavaScript',
                'TypeScript',
                'HTML',
                'CSS',
                'Tailwind',
            ],
        },
        {
            category: 'Backend',
            skills: ['Django', 'Python', 'MySQL', 'NodeJS', 'NextJS'],
        },
    ]

    const experienceList: ExperienceItemType[] = [
        {
            institute: 'I-Woman',
            title: 'Junior Fullstack Developer',
            start: 2024,
            end: 2025,
            information: [
                'Designed intuitive mockups and wireframes using Figma to streamline project development.',
                'Developed API endpoints in Next.js and TypeScript, incorporating AWS Amplify and Contentful for authentication and content storage.',
                'Built core sections of the website in React and TypeScript, including authentication and forum functionalities, ensuring reusable and scalable components.',
                'Collaborated with team members in an Agile environment, using Jira sprints to manage workflows and enhance productivity.',
                'Conducted comprehensive unit testing on front-end components with Jest, ensuring robust and reliable functionality.',
            ],
        },
    ]

    return (
        <div
            ref={aboutRef}
            className="min-h-screen bg-linear-to-b from-darkgray to-grayblue from-80% grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 items-start p-8 text-platinum"
            id="about-section"
        >
            <motion.div
                className="flex flex-col gap-y-6 h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.5, once: true }}
            >
                <SmallHeader text="About" />
                <TextWrapper>
                    <p className="2xl:text-lg">
                        Software Developer with experience in modern
                        technologies such as React, TypeScript, Next.js. Proven
                        ability to adapt quickly, solve complex technical
                        challenges, and collaborate within Agile teams. Seeking
                        a role to contribute to impactful projects and grow as a
                        developer.
                    </p>
                </TextWrapper>
                <div className="flex flex-col gap-y-6 w-full">
                    <SmallHeader text="Education" />
                    <TextWrapper>
                        <div className="flex flex-col gap-y-4">
                            {educationList.map((item, i) => (
                                <ExperienceItem key={i} item={item} />
                            ))}
                        </div>
                    </TextWrapper>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.5, once: true }}
                className="h-full flex flex-col gap-y-6"
            >
                <div className="flex flex-col gap-y-6">
                    <SmallHeader text="Experience" />
                    <TextWrapper>
                        <div>
                            {experienceList.map((item, i) => (
                                <ExperienceItem key={i} item={item} />
                            ))}
                        </div>
                    </TextWrapper>
                </div>
                <div className="flex flex-col gap-y-6">
                    <SmallHeader text="Skills" />
                    <motion.div className=" flex flex-col gap-y-6">
                        <div className="flex h-full gap-x-6">
                            {SkillsList.map((item, i) => (
                                <SkillsSection key={i} item={item} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export type { ExperienceItemType, SkillsType }

export default About
