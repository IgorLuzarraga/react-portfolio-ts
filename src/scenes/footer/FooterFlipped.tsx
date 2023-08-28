import SocialMediaIcons from "../../components/SocialMediaIcons"
import FooterCopyRightFlipped from "./FooterCopyRightFlipped"


const FooterFlipped = () => {
    return (
        <footer className="h-64 bg-red pt-10">
            <div className="mx-auto w-5/6">

                <div className="flex justify-end">
                    <SocialMediaIcons />
                </div>

                <FooterCopyRightFlipped />

            </div>

        </footer>
    )
}

export default FooterFlipped