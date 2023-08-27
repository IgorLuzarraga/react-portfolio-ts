import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";

type Props = {
    headingInitPos: number,
}

const TestimonialsHeadings = ({ headingInitPos }: Props) => {
    return (
        <motion.div
            className="md:w-1/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: headingInitPos },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                TESTIMONIALS
            </p>

            <LineGradient width="mx-auto w-2/5" />

            <p className="mt-10">
                Here's What People are Saying About My Work. Aliquam aliquet integer
                ut fames odio in at. At magna ornare dictum lectus.
            </p>

        </motion.div>
    )
}

export default TestimonialsHeadings