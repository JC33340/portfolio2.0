type SmallHeaderType = {
    text: string
}

const SmallHeader = ({ text }: SmallHeaderType) => {
    return (
        <div>
            <p className="text-3xl font-semibold">{text}</p>
        </div>
    )
}

export default SmallHeader
