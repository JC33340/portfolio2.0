import type { ExperienceItemType } from './About'

type ExperienceItemComponentType = {
    item: ExperienceItemType
}

const ExperienceItem = ({ item }: ExperienceItemComponentType) => {
    return (
        <div className="flex flex-col gap-y-2">
            <p>
                {item.title && <span>{item.title} &#x2022; </span>}
                <span className="font-semibold whitespace-break-spaces">
                    {item.institute}
                </span>{' '}
                <span className="opacity-50">
                    &#40;{item.start}
                    {item.start && ' - '}
                    {item.end || ' current'}&#41;
                </span>
            </p>
            {item.grade && <p>Grade: {item.grade}</p>}
            <ul className="flex flex-col gap-y-2">
                {item.information?.map((line) => (
                    <li className="text-sm opacity-70">&#x2022; {line}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceItem
