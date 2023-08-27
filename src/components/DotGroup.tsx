import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../share/types";
import { fromSelectedPageToPageName } from "../utilities/utils";

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    position: string
}

const DotGroup = ({ selectedPage, setSelectedPage, position }: Props) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%] 
    before:top-[-50%]`;

    return (
        <div className={`flex flex-col gap-6 fixed top-[60%] ${position}`}>
            <AnchorLink
                href={hrefLink(selectedPage)}
                className={`${selectedPage === SelectedPage.Home ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage(SelectedPage.Home)}
            />

            <AnchorLink
                href={hrefLink(selectedPage)}
                className={`${selectedPage === SelectedPage.Skills ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage(SelectedPage.Skills)}
            />

            <AnchorLink
                href={hrefLink(selectedPage)}
                className={`${selectedPage === SelectedPage.Projects ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage(SelectedPage.Projects)}
            />

            <AnchorLink
                href={hrefLink(selectedPage)}
                className={`${selectedPage === SelectedPage.Testimonials ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage(SelectedPage.Testimonials)}
            />

            <AnchorLink
                href={hrefLink(selectedPage)}
                className={`${selectedPage === SelectedPage.Contact ? selectedStyles : "bg-dark-grey"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage(SelectedPage.Contact)}
            />
        </div>
    );
};

const hrefLink = (selectedPage: SelectedPage) =>
    `#${fromSelectedPageToPageName(selectedPage)}`


export default DotGroup;
