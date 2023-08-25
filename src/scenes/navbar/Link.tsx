import { SelectedPage } from "../../share/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { fromSelectedPageToPageName } from "../../utilities/utils";

type Props = {
    page: SelectedPage,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) =>
    <AnchorLink
        className={`${selectedPage === page ? "text-yellow" : ""}
        transition duration-500 hover:text-yellow
        `}
        href={`#${page}`}
        onClick={() => setSelectedPage(page)}
    >
        {fromSelectedPageToPageName(page)}
    </AnchorLink>

export default Link