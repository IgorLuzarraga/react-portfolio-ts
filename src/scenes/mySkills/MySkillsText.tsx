import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient"

const MySkillsText = () => {
    return (
        <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <p className="font-playfair font-semibold text-4xl mb-5">
                MY <span className="text-red">SKILLS</span>
            </p>

            <LineGradient width="w-1/3" />

            <p className="mt-10 mb-7">
                Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                fames odio in at.
            </p>
        </motion.div>
    )
}

export default MySkillsText