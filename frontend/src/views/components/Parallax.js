
import Parallax from "components/Parallax/Parallax.js";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion'

import { makeStyles } from "@material-ui/core/styles";
import bg from 'assets/img/blue-sky-bg.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    item: {
        maxWidth: 256
    },
    text: {
        fontFamily: 'Permanent Marker, cursive',
        fontSize: 18,
        fontWeight: 'bold'
    }

}))
const transitionProp = { repeat: Infinity, duration: 0.1 }
const variants = {
    animate: { opacity: 1, rotate: [1, 0, -1], x: [2, 0, - 2], scale: [1.03, 0.97, 1.03], transition: { rotate: transitionProp, x: transitionProp, scale: transitionProp, duration: 1.5 } },
    initial: { opacity: 0 },
}

export default function CustomParallax(props) {
    const classes = useStyles()

    return (
        <Parallax image={bg} >
            <Grid container className={classes.root} justify="center">
                <Grid item xs className={classes.item}>
                    <motion.div variants={variants} animate="animate" initial="initial">
                        <Typography variant="subtitle1" gutterBottom align='center' className={classes.text}>
                            Welcome to
                            </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs className={classes.item}>
                    <motion.div variants={variants} animate="animate" initial="initial">
                        <Typography variant="body2" gutterBottom align='center' className={classes.text}>
                            My {props.name}
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>
        </Parallax>
    )
}