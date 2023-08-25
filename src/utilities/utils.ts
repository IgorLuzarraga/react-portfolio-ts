import { SelectedPage } from "../share/types"

export const fromSelectedPageToPageName = (selectedPage: SelectedPage) => {
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