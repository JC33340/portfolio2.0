type SectionHeaderType = {
    text: string
}

const SectionHeader = ({ text }: SectionHeaderType) => {
    return (
        <div>
            <p className="font-bold text-5xl">{text}</p>
        </div>
    )
}

export default SectionHeader
