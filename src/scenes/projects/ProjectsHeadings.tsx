import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";


const ProjectsHeadings = () => {
    return (
        <motion.div
            className="md:w-2/5 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div>
                <p className="font-playfair font-semibold text-4xl">
                    <span className="text-red">PRO</span>JECTS
                </p>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-2/3" />
                </div>
            </div>
            <p className="mt-10 mb-10">
                Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                fames odio in at. At magna ornare dictum lectus. Purus massa morbi
                purus nec eget eleifend ut elit.
            </p>
        </motion.div>
    )
}

export default ProjectsHeadings