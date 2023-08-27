import { motion } from "framer-motion";
import Project from "./Project";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ProjectsHeadings from "./ProjectsHeadings";
import ProjectAdvertisement1 from "./ProjectAdvertisement1";
import ProjectAdvertisement2 from "./ProjectAdvertisement2";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Projects = () => {
    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Projects)} className="pt-48 pb-48">

            {/* HEADINGS */}
            <ProjectsHeadings />

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <ProjectAdvertisement1 />
                    <Project title="Project 2" />
                    <Project title="Project 1" />

                    {/* ROW 2 */}
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    {/* ROW 3 */}
                    <Project title="Project 6" />
                    <Project title="Project 7" />
                    <ProjectAdvertisement2 />
                </motion.div>
            </div>
        </section>
    );
};

export default Projects