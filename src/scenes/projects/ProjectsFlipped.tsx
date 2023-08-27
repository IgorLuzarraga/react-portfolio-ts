import { motion } from "framer-motion";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ProjectsHeadings from "./ProjectsHeadings";
import ProjectAdvertisement1 from "./ProjectAdvertisement1";
import ProjectAdvertisement2 from "./ProjectAdvertisement2";
import ProjectFlipped from "./ProjectFlipped";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProjectsFlipped = () => {
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
                    <ProjectFlipped title="Project 2" />
                    <ProjectFlipped title="Project 1" />
                    <ProjectAdvertisement1 />


                    {/* ROW 2 */}
                    <ProjectFlipped title="Project 5" />
                    <ProjectFlipped title="Project 4" />
                    <ProjectFlipped title="Project 3" />


                    {/* ROW 3 */}
                    <ProjectAdvertisement2 />
                    <ProjectFlipped title="Project 7" />
                    <ProjectFlipped title="Project 6" />

                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsFlipped