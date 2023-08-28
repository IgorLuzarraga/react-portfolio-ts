import { SelectedPage } from "../../share/types"
import useMediaQuery from '../../hooks/useMediaQuery'
import NavAvobeMediumScreen from "./NavAvobeMediumScreen"
import NavSmallScreen from "./NavSmallScreen"
import { FaFlipboard } from "react-icons/fa"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    isAppFlipped: boolean,
    setIsAppFlipped: (value: boolean) => void,
}

type BtnFlipAppProps = {
    isAppFlipped: boolean,
    setIsAppFlipped: (value: boolean) => void
}

const BtnFlipApp = ({ isAppFlipped, setIsAppFlipped }: BtnFlipAppProps) =>
    <button
        className='rounded-full p-2'
        onClick={() => setIsAppFlipped(!isAppFlipped)}
    >
        <FaFlipboard className='w-6 h-6 text-white' />
    </button>

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage, isAppFlipped, setIsAppFlipped }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
    const navbarBackground = isTopOfPage ? "" : "bg-red shadow-2xl"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                {/* <h4 className="font-playfair text-3xl font-bold">JE</h4> */}

                {isAboveMediumScreens
                    ? <>
                        {!isAppFlipped
                            ?
                            <>
                                <h4 className="font-playfair text-3xl font-bold">JE</h4>
                                <BtnFlipApp isAppFlipped={isAppFlipped} setIsAppFlipped={setIsAppFlipped} />
                                <NavAvobeMediumScreen
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </>
                            :
                            <>
                                <NavAvobeMediumScreen
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <BtnFlipApp isAppFlipped={isAppFlipped} setIsAppFlipped={setIsAppFlipped} />
                                <h4 className="font-playfair text-3xl font-bold">JE</h4>
                            </>
                        }
                    </>
                    :
                    <>
                        <h4 className="font-playfair text-3xl font-bold">JE</h4>
                        <NavSmallScreen
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </>
                }

            </div>
        </nav>
    )
}

export default NavBar