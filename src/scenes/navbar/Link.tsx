import { SelectedPage } from "../../share/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: SelectedPage,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const fromSelectedPageToPageName = (selectedPage: SelectedPage) => {
    switch (selectedPage) {
        case SelectedPage.Projects:
            return 'Projects'
        case SelectedPage.Contact:
            return 'Contact'
        case SelectedPage.Home:
            return 'Home'
        case SelectedPage.Testimonials:
            return 'Testimonials'
        case SelectedPage.Skills:
            return 'Skills'
    }
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