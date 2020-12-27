
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion'
import Button from "components/CustomButtons/Button";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import usc from 'assets/img/logos/usc.jpg'
import lagcc from 'assets/img/logos/lagcc.jpg'
import sbu from 'assets/img/logos/sbu.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 'auto'
    },
    title: {
        height: 'auto',
        minWidth: '106px',
        fontFamily: 'Langar, cursive',
        overflow: 'hidden'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 'auto',
        // height: "auto",
        width: "640px"
    },
    logo: {
        display: 'block',
        height: "64px",
        width: "64px",
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    name: {
        fontFamily: 'Graduate, cursive',
    }
}))


export default function EducationSection() {
    const classes = useStyles()
    const [reverseOrdering, SetReverseOrdering] = React.useState(false);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} style={{ marginTop: 256 }}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item container xs={12} justify='center'>
                    <Button color='transparent' onClick={() => SetReverseOrdering(!reverseOrdering)}>
                        <motion.div whileHover={{ scale: 1.4 }}
                            whileTap={{ scale: 0.9 }}>
                            <Grid container justify="center" spacing={4}>
                                <Grid item>
                                    <Typography variant="subtitle1" gutterBottom className={classes.title}>
                                        My Educations
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" gutterBottom className={classes.title}>
                                        {reverseOrdering ? "From the most Previous" : "From the most Recent"}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <div>
                                        <motion.i
                                            className="fas fa-arrow-up"
                                            variants={
                                                {
                                                    up: { rotate: [180, 270, 360], transition: { duration: 0.3 } },
                                                    down: { rotate: [0, 90, 180], transition: { duration: 0.3 } },
                                                }
                                            }
                                            animate={reverseOrdering ? "up" : 'down'}
                                        >
                                        </motion.i>
                                    </div>
                                </Grid>
                            </Grid>
                        </motion.div>
                    </Button>
                </Grid>
            </Grid>
            <Educatoins classes={classes} ordering={reverseOrdering} />
        </motion.div>
    )
}



function Educatoins(props) {
    const list = [
        { name: 'University of Southern California', time: '2020 - 2022', logo: usc, location: 'CA', degree: 'MS in CS' },
        { name: 'Stony Brook University', time: '2018 - 2020', logo: sbu, location: 'NY', degree: 'BS in CS && AMS' },
        { name: 'LaGuardia Community College', time: '2015 - 2017', logo: lagcc, location: 'NY', degree: 'AS in CS' }
    ]
    const { classes } = props
    const items = props.ordering ? list : list.reverse()
    return (
        <Grid container className={classes.root} direction='column' key={props.ordering} justify="space-evenly" spacing={5}>
            <motion.div
                animate='show'
                initial='hidden'
                transition={{ staggerChildren: 0.1 }}
                varients={{
                    show: { opacity: 1 },
                    hidden: { opacity: 0 }
                }}
            >
                {
                    items.map((e, key) => (
                        <motion.div
                            variants={{
                                show: { y: 0, opacity: 1 },
                                hidden: { y: 100, opacity: 0 }
                            }}
                            key={key}
                        >
                            <Paper variant="outlined" className={classes.paper} key={key}>
                                <Grid container spacing={2}>
                                    <img className={classes.logo} alt='logo' src={e.logo}></img>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" className={classes.name} align={'left'}>
                                            {e.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom align={'left'}>
                                            {e.degree}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" gutterBottom align={'right'}>
                                            {e.time}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom align={'right'}>
                                            {e.location}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </motion.div>
                    ))
                }
            </motion.div>
        </Grid >
    )
}