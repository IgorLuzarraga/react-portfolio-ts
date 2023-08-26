import { motion } from "framer-motion";
import SocialMediaIcons from "../../components/SocialMediaIcons";

type Props = {
    btnsInitPos: number,
}

const SocialMediaBtns = ({ btnsInitPos }: Props) =>
    <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: btnsInitPos },
            visible: { opacity: 1, x: 0 },
        }}
    >
        <SocialMediaIcons />
    </motion.div>

export default SocialMediaBtns