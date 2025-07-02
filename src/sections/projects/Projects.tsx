import SectionHeader from '../../components/SectionHeader'
import ProjectItem from './ProjectItem'

type projectItemType = {
    name: string
    description: string
    technologies: string[]
    photo: string
    link: string
}

const Projects = () => {
    const projectList: projectItemType[] = [
        {
            name: 'Budgeter',
            description: '',
            technologies: [],
            photo: '/projectPics/budgeter.png',
            link: '',
        },
    ]

    return (
        <div className="bg-grayblue text-platinum min-h-screen flex flex-col items-center p-8 gap-y-8">
            <SectionHeader text="Projects" />
            <div className="flex flex-col gap-y-8 w-full">
                {projectList.map((item) => (
                    <ProjectItem item={item} />
                ))}
            </div>
        </div>
    )
}

export type { projectItemType }

export default Projects
