import { motion } from "framer-motion";

const TestimonialsPerson1 = () => {
    return (
        <motion.div
            className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
      before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
                A auctor pharetra hendrerit mattis amet etiam interdum platea.
            </p>
        </motion.div>
    )
}

export default TestimonialsPerson1