type SmallHeaderType = {
    text: string
}

const SmallHeader = ({ text }: SmallHeaderType) => {
    return (
        <div>
            <p className="text-3xl font-semibold 2xl:text-4xl">{text}</p>
        </div>
    )
}

export default SmallHeader
