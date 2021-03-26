
import Grid from '@material-ui/core/Grid';
import Profile from './Profile'
import TextField from '@material-ui/core/TextField';
import ChatList from './ChatList'

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    sideIcon: {
        position: 'absolute',
        marginLeft: 'auto'
    },
    iconWrapper: {
        width: 32,
        height: 32,
        padding: '8px 10px',
        marginLeft: 'calc(100% - 32px)'
    },
    display: {
        backgroundColor: 'lightblue',
        height: '90%',
        width: '90%',
    },
    top: {
        flexGrow: 1,
        fontSize: '24px'
    },
    input: {
        width: '100%'
    },
    list: {
        height: 'calc(100% - 112px)',
        width: '100%',
        backgroundColor: 'orange'
    }
}))




export default function ChatLeft(props) {
    const classes = useStyles()
    return (

        <Grid container className={classes.root} justify='center' alignItems='center'>

            <Grid item className={classes.display} >


                <div className={classes.iconWrapper} onClick={() => props.setSide(!props.side)}>
                    {props.sideDisplay === true ? null : <i className={"fas fa-chevron-right " + classes.sideIcon}></i>}

                </div>

                <Grid container className={classes.top} justify='center' alignItems='center' direction='column' style={{ overflow: 'hidden' }} spacing={2}>
                    <Grid item style={{ overflow: 'hidden', maxHeight: 48 }}>
                        <Profile />
                    </Grid>
                    <Grid item className={classes.input}>
                        <TextField
                            style={{ height: 32, width: '90%', marginLeft: '5%' }}
                            inputProps={{ style: { height: 32, padding: '0px 14px', width: '100%' } }}
                            label="Search"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.list}>
                    <ChatList />
                </Grid>
            </Grid>
        </Grid>

    )
}
