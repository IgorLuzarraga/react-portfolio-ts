import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";

type Props = {
    headingInitPos: number,
}
const ContactHeading = ({ headingInitPos }: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: headingInitPos },
                visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-end w-full"
        >
            <div>
                <p className="font-playfair font-semibold text-4xl">
                    <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                </p>
                <div className="flex md:justify-end my-5">
                    <LineGradient width="w-1/2" />
                </div>
            </div>
        </motion.div>
    )
}

export default ContactHeading