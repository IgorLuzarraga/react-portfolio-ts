import { useEffect, useState } from "react";
import NavBar from './scenes/navbar';
import { SelectedPage } from "./share/types";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import LineGradient from "./components/LineGradient";
import { motion } from "framer-motion"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const isDesktop = useMediaQuery("(min-width: 1060px")

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
    <div className="app bg-gray-20 bg-purple-600">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {isDesktop && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}

      <div className="w-5/6 mx-auto md:h-full mb-[-200px]">
        <motion.div
          // margin="0 0 -200 0"
          // className="w-5/6 mx-auto mb-[-200px]"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* <Landing setSelectedPage={setSelectedPage} /> */}
          Landing
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-[-200px]">
        <motion.div
          // margin="0 0 -200px 0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          {/* <MySkills /> */}
          MySkills
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-[-200px]">
        <motion.div
          // margin="0 0 -200px 0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          {/* <Projects /> */}
          Projects
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-[-200px]">
        <motion.div
          // margin="0 0 -200px 0"
          // amount="all"
          onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >
          {/* <Testimonials /> */}
          Testimonials
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          // margin="0 0 -200px 0"
          // amount="all"
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
