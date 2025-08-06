type SectionHeaderType = {
    text: string
}

const SectionHeader = ({ text }: SectionHeaderType) => {
    return (
        <div>
            <p className="font-bold text-5xl 2xl:text-7xl">{text}</p>
        </div>
    )
}

export default SectionHeader
