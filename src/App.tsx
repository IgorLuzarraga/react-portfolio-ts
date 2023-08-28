import { useEffect, useState } from "react";
import NavBar from './scenes/navbar';
import { SelectedPage } from "./share/types";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import LineGradient from "./components/LineGradient";
import { motion } from "framer-motion"
import Landing from "./scenes/landing/Landing";
import LandingFlipped from "./scenes/landing/LandingFlipped";
import MySkills from "./scenes/mySkills/MySkills";
import MySkillsFlipped from "./scenes/mySkills/MySkillsFlipped";
import Projects from "./scenes/projects/Projects";
import ProjectsFlipped from "./scenes/projects/ProjectsFlipped";
import Testimonials from "./scenes/testimonials/Testimonials";
import TestimonialsFlipped from "./scenes/testimonials/TestimonialFlipped";
import Contact from "./scenes/contact/Contact";
import ContactFlipped from "./scenes/contact/ContactFlipped";
import Footer from "./scenes/footer/Footer";
import FooterFlipped from "./scenes/footer/FooterFlipped";

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

      {isDesktop && (
        !isAppFlipped
          ? <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} position="right-7" />
          : <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} position="left-7" />
      )}

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
          {!isAppFlipped ? <MySkills /> : <MySkillsFlipped />}

        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          {!isAppFlipped ? <Projects /> : <ProjectsFlipped />}

        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >
          {!isAppFlipped ? <Testimonials /> : <TestimonialsFlipped />}

        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >

          {!isAppFlipped ? <Contact /> : <ContactFlipped />}

        </motion.div>
      </div>

      {!isAppFlipped ? <Footer /> : <FooterFlipped />}

    </div>
  );
}

export default App;
