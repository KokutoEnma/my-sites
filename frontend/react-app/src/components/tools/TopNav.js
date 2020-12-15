import React from 'react';
import { motion } from 'framer-motion'
import MinecraftIcon from '../../images/minecraft.png'
import HomeIcon from '../../images/home.png'
import CodeIcon from '../../images/code.png'
import AboutIcon from '../../images/info.png'

class TopNav extends React.Component {

    render() {
        return (
            <nav className='topnav-wrapper'>

                <a href='/'>
                    <motion.div className='topnav-itembox' animate={{ x: -30, opacity: 1 }} initial={{ opacity: 0 }}>
                        <div className='topnav-text'>
                            <img className="topnav-icon" src={HomeIcon} alt='icon'></img>
                            <span style={{ marginLeft: '12px' }}>Home</span>
                        </div>
                    </motion.div>
                </a>

                <a href='/about'>
                    <motion.div className='topnav-itembox' animate={{ x: -30, opacity: 1 }} initial={{ opacity: 0 }}>
                        <div className='topnav-text'>
                            <img className="topnav-icon" src={AboutIcon} alt='icon'></img>
                            <span style={{ marginLeft: '12px' }}>About</span>
                        </div>
                    </motion.div>
                </a>

                <a href='/app'>
                    <motion.div className='topnav-itembox' animate={{ x: -30, opacity: 1 }} initial={{ opacity: 0 }}>
                        <div className='topnav-text'>
                            <img className="topnav-icon" src={CodeIcon} alt='icon'></img>
                            <span style={{ marginLeft: '12px' }}>Web Apps</span>
                        </div>
                    </motion.div>
                </a>
                <a href='/minecraftinfo'>
                    <motion.div className='topnav-itembox' animate={{ x: -30, opacity: 1 }} initial={{ opacity: 0 }}>
                        <div className='topnav-text'>
                            <img className="topnav-icon" src={MinecraftIcon} alt='icon'></img>
                            <span style={{ marginLeft: '12px' }}>Minecraft</span>
                        </div>
                    </motion.div>
                </a>
            </nav>
        )
    }
}

export default TopNav;