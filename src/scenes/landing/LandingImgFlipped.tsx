type Props = {
    isAboveLarge: boolean,
}

const LandingImgFlipped = ({ isAboveLarge }: Props) => {
    return (
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center">
            {isAboveLarge ? (
                <div
                    className={`relative z-0 ml-20 before:absolute before:-top-10 
                before:left-10 before:rounded-t-[400px] before:w-full 
                before:max-w-[400px] md:before:max-w-[600px] before:h-full 
                before:border-2 before:border-blue before:z-[-1]`}
                >
                    <img
                        alt="profile image"
                        className="hover:filter hover:saturate-200 transition duration-1000 
                z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="assets/profile-image.png"
                    />
                </div>
            ) : (
                <img
                    alt="profile"
                    className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                    src="assets/profile-image.png"
                />
            )}
        </div>
    )
}

export default LandingImgFlipped