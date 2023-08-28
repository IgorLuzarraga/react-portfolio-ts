import { motion } from "framer-motion";

const ContactImgFlipped = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 flex justify-end"
        >
            <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

    )
}

export default ContactImgFlipped