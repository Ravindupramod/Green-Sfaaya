import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

const Reveal = ({ children, delay = 0, duration = 0.5, className = "" }: RevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
