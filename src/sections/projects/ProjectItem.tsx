import type { projectItemType } from './Projects'
import SmallHeader from '../../components/SmallHeader'

type ProjectItemComponentType = {
    item: projectItemType
}

const ProjectItem = ({ item }: ProjectItemComponentType) => {
    return (
        <div className=" flex justify-center">
            <div className="w-full flex justify-center">
                <img src={item.photo} className="h-60 rounded-lg shadow-xl" />
            </div>
            <div className="w-full">
                <SmallHeader text={item.name} />
            </div>
        </div>
    )
}

export default ProjectItem
