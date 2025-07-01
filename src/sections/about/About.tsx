import { useContext, useEffect } from 'react'
import { portfolioContext } from '../../App'
import SectionHeader from '../../components/SectionHeader'
import SmallHeader from '../../components/SmallHeader'
import EducationItem from './EducationItem'
import SkillsSection from './SkillSection'
import { motion } from 'motion/react'

type EducationItemType = {
    institute: string
    course?: string
    start?: number
    end?: number
    grade?: string
    information?: string[]
}

type SkillsType = {
    category: string
    skills: string[]
}

const About = () => {
    const { aboutRef } = useContext(portfolioContext)

    const educationList: EducationItemType[] = [
        {
            institute: 'University College London',
            start: 2019,
            end: 2023,
            grade: '2 : 1',
        },
        {
            institute: 'HarvardX',
            end: 2023,
            course: 'CS50X Web programming with Python and JavaScript',
            information: [
                'Advanced full-stack web development course',
                'Learning Python (Django), SQLite, JavaScript, C',
                'Projects: Email, Wiki, Google Search, E-Commerce, Networking, Websocket Chat apps',
            ],
        },
        {
            institute: 'HarvardX',
            end: 2023,
            course: 'CS50 Introduction to Computer Science',
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
                'ReactJS',
                'JavaScript',
                'TypeScript',
                'NextJS',
                'HTML',
                'CSS',
                'TailwindCSS',
            ],
        },
        {
            category: 'Backend',
            skills: [
                'Django',
                'Flask',
                'Python',
                'MySQL',
                'NodeJS',
                'ExpressJS',
                'NextJS',
            ],
        },
        {
            category: 'General',
            skills: [
                'Git',
                'Responsive Design',
                'Figma',
                'Jira',
                'Jest',
                'AWS Amplify',
                'Agile Methodologies',
            ],
        },
    ]
    return (
        <div
            ref={aboutRef}
            className="h-[100vh] bg-darkgray grid grid-cols-2 gap-x-6 gap-y-10 items-start p-8 text-platinum"
            id="about-section"
        >
            <motion.div
                className="flex flex-col gap-y-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.5 }}
            >
                <SectionHeader text="About Me" />
                <div>
                    <p>
                        Software Developer with experience in modern
                        technologies such as React, TypeScript, Next.js. Proven
                        ability to adapt quickly, solve complex technical
                        challenges, and collaborate within Agile teams. Seeking
                        a role to contribute to impactful projects and grow as a
                        developer.
                    </p>
                </div>

                <div className="flex flex-col gap-y-6">
                    <SmallHeader text="Education" />
                    <div className="flex flex-col gap-y-4">
                        {educationList.map((item) => (
                            <EducationItem item={item} />
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div
                className=" flex flex-col gap-y-10 h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.5 }}
            >
                <SectionHeader text="Skills" />
                <div className="flex flex-col h-full gap-y-8">
                    {SkillsList.map((item) => (
                        <SkillsSection item={item} />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export type { EducationItemType, SkillsType }

export default About
