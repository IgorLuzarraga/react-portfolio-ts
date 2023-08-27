import { motion } from "framer-motion";

const projectVariant = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    title: string
}

const ProjectFlipped = ({ title }: Props) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div
            className="relative"
            transition={{ delay: 0.2, duration: 1 }}
            variants={projectVariant}
        >
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                    porttitor accumsan tincidunt.
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    );
};

export default ProjectFlipped