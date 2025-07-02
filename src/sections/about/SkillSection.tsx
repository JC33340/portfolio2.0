import type { SkillsType } from './About'
import SmallerHeader from '../../components/SmallerHeader'
import TechnologyIcon from '../../components/icons/TechnologyIcon'

type SkillsSectionType = {
    item: SkillsType
}

const SkillsSection = ({ item }: SkillsSectionType) => {
    return (
        <div className="flex flex-col gap-y-2 bg-grayblue p-4 rounded-lg shadow-lg w-full h-fit">
            <SmallerHeader text={item.category} />
            <div className="flex gap-x-4 gap-y-4 flex-wrap">
                {item.skills.map((tech, i) => (
                    <TechnologyIcon key={i} tech={tech} />
                ))}
            </div>
        </div>
    )
}

export default SkillsSection
