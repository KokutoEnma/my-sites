
import Grid from '@material-ui/core/Grid';
import ChatList from './ChatLeft'
import ChatRoom from './ChatRight'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    root: {
        marginTop: 96,
        backgroundColor: "white",
        width: '90%',
        height: 'calc(100vh - 96px - 160px)'
    },
}))

export default function ChatScreen() {
    const classes = useStyles()
    const root = useRef(null)

    const [multiDisplay, setMultiDisplay] = useState(window.innerWidth < 640 ? false : true)
    const [sideDisplay, setSideDisplay] = useState(true)

    window.onresize = () => {
        if (window.innerWidth < 640) setMultiDisplay(false)
        else setMultiDisplay(true)
    }

    return (
        <Grid container justify='center'>
            <Grid container className={classes.root} ref={root}>
                <motion.div
                    variants={{
                        min: { width: '0%', transition: { duration: 0.3 }, borderRight: 'none' },
                        max: { width: '100%', transition: { duration: 0.3 }, borderRight: 'none' },
                        mid: { width: '40%', transition: { duration: 0.3 } }
                    }}
                    animate={multiDisplay ? 'mid' : sideDisplay ? 'max' : 'min'}
                    style={{ overflow: 'hidden' }}
                >
                    <ChatList setSide={setSideDisplay} side={sideDisplay} sideDisplay={multiDisplay ? true : !sideDisplay} />
                </motion.div>

                <motion.div
                    variants={{
                        min: { width: '0%', transition: { duration: 0.3 } },
                        max: { width: '100%', transition: { duration: 0.3 } },
                        mid: { width: '60%', transition: { duration: 0.3 } }
                    }}
                    animate={multiDisplay ? 'mid' : sideDisplay ? 'min' : 'max'}
                    style={{ overflow: 'hidden' }}
                >
                    <ChatRoom setSide={setSideDisplay} side={sideDisplay} sideDisplay={multiDisplay ? true : sideDisplay} />
                </motion.div>
            </Grid>
        </Grid>
    )
}