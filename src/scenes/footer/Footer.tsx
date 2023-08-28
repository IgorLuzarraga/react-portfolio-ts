import SocialMediaIcons from "../../components/SocialMediaIcons"
import FooterCopyRight from "./FooterCopyRight"


const Footer = () => {
    return (
        <footer className="h-64 bg-red pt-10">
            <div className="mx-auto w-5/6">

                <SocialMediaIcons />
                <FooterCopyRight />

            </div>

        </footer>
    )
}

export default Footer