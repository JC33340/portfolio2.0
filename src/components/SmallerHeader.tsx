type SmallerHeaderType = {
    text: string
}

const SmallerHeader = ({ text }: SmallerHeaderType) => {
    return (
        <div>
            <p className="text-xl font-semibold">{text}</p>
        </div>
    )
}

export default SmallerHeader
