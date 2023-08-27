import { motion } from "framer-motion";

const MySkillsImaginative = () => {
    return (
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">03</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">
                        Imaginative
                    </p>
                </div>
                {/* <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" /> */}
                <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-20 md:bg-opacity-70"></div>
            </div>
            <p className="mt-5">
                Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
                curabitur. Lectus libero, egestas enim aliquam quis felis amet.
                Sagittis, amet netus fringilla netus lobortis odio sed platea.
                Bibendum.
            </p>
        </motion.div>
    )
}

export default MySkillsImaginative