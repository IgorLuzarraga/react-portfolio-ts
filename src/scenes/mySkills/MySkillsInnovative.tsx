import { motion } from "framer-motion";

const MySkillsInnovative = () => {
    return (
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">02</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">
                        Innovative
                    </p>
                </div>
                {/* <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" /> */}
                <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-20 md:bg-opacity-70"></div>
            </div>
            <p className="mt-5">
                Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
                amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
                nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
                faucibus a
            </p>
        </motion.div>
    )
}

export default MySkillsInnovative