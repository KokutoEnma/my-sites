import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion'
import Button from "components/CustomButtons/Button";
import Typography from '@material-ui/core/Typography';
import Arrow from 'views/components/SortingArrow'


export default function ListTitleSecion(props) {
    const { classes, ordering, setReverseOrdering } = props
    return (
        <Grid container className={classes.root}>
            <Grid item container justify='center'>
                <motion.div className='radius-btn' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button color='transparent' onClick={() => setReverseOrdering(!ordering)}>
                        <Grid container justify="center" spacing={4}>
                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom className={classes.title}>
                                    {props.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom className={classes.title}>
                                    {ordering ? "From the most Previous" : "From the most Recent"}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Arrow ordering={ordering} />
                            </Grid>
                        </Grid>
                    </Button>
                </motion.div>
            </Grid>
        </Grid>
    )
}