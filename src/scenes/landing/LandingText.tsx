import { motion } from "framer-motion";

type Props = {
    btnsInitPos: number,
}

const LandingText = ({ btnsInitPos }: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: btnsInitPos },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <div className="flex justify-center md:justify-normal gap-[15px] text-6xl font-playfair z-10">
                <p className="text-center md:text-start">
                    Jane
                </p>

                <p
                    className="xs:relative text-white md:text-deep-blue xs:font-semibold z-20 
            xs:before:content-brush before:absolute before:-left-[25px] 
            before:-top-[80px] before:z-[-1]"
                >
                    Esper
                </p>

            </div>

            <p className="mt-10 mb-7 text-sm text-center md:text-start">
                Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
                viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
            </p>
        </motion.div>
    )
}

export default LandingText