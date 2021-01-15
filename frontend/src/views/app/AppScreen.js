import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 128,
        marginBottom: 128
    }
}))


export default function AppScreen() {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid container className={classes.root} justify='center'>
                <Link to='app/statues'>
                    <div className='radius-btn'>
                        <Button color='transparent'>
                            My Statues
                        </Button>
                    </div>

                </Link>
            </Grid>
        </Grid>
    )
}