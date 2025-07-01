import type { SkillsType } from './About'
import SmallHeader from '../../components/SmallHeader'

type SkillsSectionType = {
    item: SkillsType
}

const SkillsSection = ({ item }: SkillsSectionType) => {
    return (
        <div className="flex flex-col gap-y-2">
            <SmallHeader text={item.category} />
            <ul className="grid grid-cols-3 gap-y-2">
                {item.skills.map((skill) => (
                    <li className="opacity-70">&#x2022; {skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default SkillsSection
