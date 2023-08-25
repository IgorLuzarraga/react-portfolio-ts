import { SelectedPage } from "../../share/types"
import useMediaQuery from '../../hooks/useMediaQuery'
import NavAvobeMediumScreen from "./NavAvobeMediumScreen"
import NavSmallScreen from "./NavSmallScreen"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
    const navbarBackground = isTopOfPage ? "" : "bg-red shadow-2xl"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">JE</h4>

                {isAboveMediumScreens
                    ? <NavAvobeMediumScreen
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    : <NavSmallScreen
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                }

            </div>
        </nav>
    )
}

export default NavBar