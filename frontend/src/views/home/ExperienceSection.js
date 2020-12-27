
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion'
import Button from "components/CustomButtons/Button";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import hunter from 'assets/img/logos/hunter.jpg'
import lagcc from 'assets/img/logos/lagcc.jpg'
import cola from 'assets/img/logos/cola.png'
import bnl from 'assets/img/logos/bnl.gif'

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


export default function ExperienceSection() {
    const classes = useStyles()
    const [reverseOrdering, SetReverseOrdering] = React.useState(false);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} style={{ marginTop: 64 }}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item container xs={12} justify='center'>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='radius-btn'>
                        <Button color='transparent' onClick={() => SetReverseOrdering(!reverseOrdering)}>
                            <Grid container justify="center" spacing={4}>
                                <Grid item>
                                    <Typography variant="subtitle1" gutterBottom className={classes.title}>
                                        My Experiences
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
                        </Button>
                    </motion.div>
                </Grid>
            </Grid>
            <Experiences classes={classes} ordering={reverseOrdering} />
        </motion.div>
    )
}



function Experiences(props) {
    const list = [
        { name: 'City of Los Angeles', time: '1/2021 - present', logo: cola, location: 'CA', about: 'Develop web apps using ASP.net + oracleDB', title: 'Software Engineer Intern' },
        { name: 'Brookhaven National Laboratory', time: '6/2020 - 8/2020', logo: bnl, location: 'NY', about: 'Build + Analysis Neural Networks models (GAN) in usage of deblending mixed galaxy', title: 'Student Research Intern' },
        { name: 'Brookhaven National Laboratory', time: '6/2019 - 8/2019', logo: bnl, location: 'NY', about: 'Build Neural Networks models (GAN) in usage of deblending mixed galaxy', title: 'Student Research Intern' },
        { name: 'Hunter College', time: '6/2017 - 8/2017', logo: hunter, location: 'NY', about: 'Develop backend + Database service for mobile app in python + SQL', title: 'Software Engineer Resaearch Assistant' },
        { name: 'LaGuardia Community College', time: '9/2016 - 6/2017', logo: lagcc, location: 'NY', about: 'Basic Robotic Programming + Object Detection + Face Recognition', title: 'Research Assistant' }
    ]
    const { classes } = props
    const items = props.ordering ? list : list.reverse()
    return (

        <Grid container className={classes.root} direction={'column'} justify="space-evenly" spacing={5} key={props.ordering}>
            <motion.div
                animate='show'
                initial='hidden'
                transition={{ staggerChildren: 0.2 }}
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
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ transition: 'all 0.3s' }}
                        >
                            <Paper variant="outlined" className={classes.paper} >
                                <Grid container spacing={2}>
                                    <img className={classes.logo} alt='logo' src={e.logo}></img>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" className={classes.name} align={'left'}>
                                            {e.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom align={'left'}>
                                            {e.title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom align={'left'} style={{ fontSize: '10px' }}>
                                            {e.about}
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