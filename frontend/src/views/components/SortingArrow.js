import { motion } from 'framer-motion'


export default function SortingArrow(props) {
    return (
        <motion.i
            className="fas fa-arrow-up"
            variants={
                {
                    up: { rotate: [180, 270, 360], transition: { duration: 0.3 } },
                    down: { rotate: [0, 90, 180], transition: { duration: 0.3 } },
                    load: { rotate: 90 }
                }
            }
            animate={props.load === true ? 'load' : props.ordering ? "up" : 'down'}
        >
        </motion.i>
    )
}