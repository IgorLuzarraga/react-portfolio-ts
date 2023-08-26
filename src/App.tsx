import { useEffect, useState } from "react";
import NavBar from './scenes/navbar';
import { SelectedPage } from "./share/types";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import LineGradient from "./components/LineGradient";
import { motion } from "framer-motion"
import Landing from "./scenes/landing/Landing";
import LandingFlipped from "./scenes/landing/LandingFlipped";
import MySkills from "./scenes/MySkills";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const isDesktop = useMediaQuery("(min-width: 1060px")
  const [isAppFlipped, setIsAppFlipped] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-deep-blue">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isAppFlipped={isAppFlipped}
        setIsAppFlipped={setIsAppFlipped}
      />

      {isDesktop && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}

      <div className="w-5/6 mx-auto md:h-full mb-[0px]">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {!isAppFlipped ? <Landing setSelectedPage={setSelectedPage} />
            : <LandingFlipped setSelectedPage={setSelectedPage} />
          }

        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          <MySkills />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          {/* <Projects /> */}
          Projects
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >
          {/* <Testimonials /> */}
          Testimonials
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
          {/* <Contact /> */}
          Contact
        </motion.div>
      </div>
      {/* <Footer /> */}
      Footer
    </div>
  );
}

export default App;
