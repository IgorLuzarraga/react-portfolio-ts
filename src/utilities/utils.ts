import { SelectedPage } from "../share/types"
import { pipe } from 'fp-ts/lib/function'

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

const addSimbolPrefix = (input: string, simbol: string): string => `${simbol}${input}`

const addHashPrefix = (input: string): string => addSimbolPrefix('#', input)

const toLowerCase = (input: string): string => input.toLowerCase();

export const fromSelectedPageToPageId = (selectedPage: SelectedPage) =>
    pipe(selectedPage, fromSelectedPageToPageName, toLowerCase)

export const fromSelectedPageToPageHref = (selectedPage: SelectedPage) =>
    pipe(selectedPage, fromSelectedPageToPageName, toLowerCase, addHashPrefix)