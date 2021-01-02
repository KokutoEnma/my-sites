import React from 'react'
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



export default function Educatoins(props) {
    const { classes, list } = props
    const items = props.ordering ? list.reverse() : list
    return (
        <Grid container className={classes.root2} justify='center' >
            <motion.div
                animate='show'
                initial='hidden'
                transition={{ staggerChildren: 0.2 }}
                varients={{
                    show: { opacity: 1 },
                    hidden: { opacity: 0 }
                }}
                style={{ width: '100%' }}
                key={props.ordering}
            >
                {
                    items.map((item, key) => (
                        <motion.div
                            variants={{
                                show: { y: 0, opacity: 1 },
                                hidden: { y: 100, opacity: 0 }
                            }}
                            key={key}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ transition: 'all 0.3s', marginTop: '24px' }}
                        >
                            <Paper variant="outlined">
                                <Grid container direction='row'>
                                    <img src={item.logo} alt='' className={classes.logo}></img>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom align={'left'} className={classes.name}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom align={'left'} className={classes.title}>
                                            {item.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" gutterBottom align={'right'}>
                                            {item.time}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom align={'right'}>
                                            {item.location}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                        </motion.div>
                    ))
                }

            </motion.div>
        </Grid>
    )
}