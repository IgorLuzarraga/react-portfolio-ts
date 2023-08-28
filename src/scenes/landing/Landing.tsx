import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import LandingImg from "./LandingImg";
import ContactMeBtns from "./ContactMeBtns";
import SocialMediaBtns from "./SocialMediaBtns";
import LandingText from "./LandingText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Landing = ({ setSelectedPage }: Props) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)")

    return (
        <section
            id={fromSelectedPageToPageId(SelectedPage.Home)}
            className="md:flex justify-between items-center gap-16 md:h-full py-10 mb-28"
        >
            {/* TEXT AND CONTACT */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">

                {/* HEADINGS */}
                <LandingText btnsInitPos={-50} />

                {/* CONTACT ME*/}
                <ContactMeBtns setSelectedPage={setSelectedPage} btnsInitPos={-50} />
                <SocialMediaBtns btnsInitPos={-50} />

            </div>

            {/* IMAGE */}
            <LandingImg isAboveLarge={isAboveLarge} />
        </section>
    );
};

export default Landing;
