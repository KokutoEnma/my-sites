import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button'
import Dialog from '../dialogs/LogoutDialog'
import { useState } from 'react';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function ProfilePopper(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
        <>
            <Popper open={props.open} anchorEl={props.anchorEl} placement={props.placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography className={classes.typography}>The content of the Popper.</Typography>
                            <Grid container justify='center'>
                                <Button color="info" onClick={() => setOpen(true)} >
                                    Sign Out
                                </Button>
                            </Grid>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Dialog open={open} setOpen={setOpen} />
        </>
    )
}