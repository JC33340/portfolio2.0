type TextWrapperType = {
    children: React.ReactNode
}

const TextWrapper = ({ children }: TextWrapperType) => {
    return (
        <div className="bg-grayblue p-4 rounded-lg w-full shadow-xl">
            {children}
        </div>
    )
}

export default TextWrapper
