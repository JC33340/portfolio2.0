import profilePic from '/profilePic.png'

const Photo = () => {
    return (
        <div>
            <img
                className="h-80 rounded-[50%]"
                src={profilePic}
                alt="Profile picture"
            />
        </div>
    )
}

export default Photo
