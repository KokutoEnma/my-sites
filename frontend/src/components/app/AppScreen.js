import React from 'react'
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion'

class AppScreen extends React.Component {

    render() {
        const wrapper_height = window.innerHeight - 84 * 2;
        return (
            <motion.div className="content-wrapper" initial={{ opacity: 0, minHeight: wrapper_height }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="app-button">
                    <Button variant="contained" onClick={() => this.props.history.push('/app/chat')}>Chat</Button>
                </div>
                <div className="app-button">
                    <Button variant="contained" onClick={() => window.location.replace('http://delit.shaw-yu.com')}>Delit</Button>
                </div>
            </motion.div>
        )
    }
}

export default AppScreen