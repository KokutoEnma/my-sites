import React from 'react'
import { motion } from 'framer-motion'

class HomeScreen extends React.Component {

    render() {
        return (
            <>
                HomeScreen
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi 大白痴
                </motion.h1>
            </>
        )
    }
}

export default HomeScreen