import Link from './Link'
import { SelectedPage } from '../../share/types'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const NavAvobeMediumScreen = ({ selectedPage, setSelectedPage }: Props) =>
    <div className="flex gap-16 font-opensans text-sm font-semibold">
        <Link
            //page="Home"
            page={SelectedPage.Home}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            //page="Skills"
            page={SelectedPage.Skills}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            //page="Our Projects"
            page={SelectedPage.Projects}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            //page="Our Testimonials"
            page={SelectedPage.Testimonials}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            //page="Contact Us"
            page={SelectedPage.Contact}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
    </div>

export default NavAvobeMediumScreen