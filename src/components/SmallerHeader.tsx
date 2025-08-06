type SmallerHeaderType = {
    text: string
}

const SmallerHeader = ({ text }: SmallerHeaderType) => {
    return (
        <div>
            <p className="text-xl font-semibold 2xl:text-3xl">{text}</p>
        </div>
    )
}

export default SmallerHeader
