

import Grid from '@material-ui/core/Grid';
import ChatDisplay from './ChatDisplay'
import Input from '@material-ui/core/Input';



import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
    },
    sideIcon: {
        position: 'absolute',
        marginLeft: 'auto'
    },
    iconWrapper: {
        width: 32,
        height: 32,
        padding: '8px 10px',
    },
    display: {
        backgroundColor: 'lightblue',
        height: '90%',
        width: '90%',
    },
    titleWrapper: {
        width: '100%',
        height: 48,
        textAlign: 'center',
        backgroundColor: 'pink',
        borderBottom: 'gray solid 1px',
        overflow: 'hidden',
    },
    title: {
        overflow: 'hidden',
    },
    inputWrapper: {
        height: 64,
        overflow: 'hidden',
        // minWidth: 164
    },
    icon: {
        fontSize: 24
    }
}))






export default function ChatRoom(props) {
    const classes = useStyles()
    return (
        <Grid container className={classes.root} justify='center' alignItems='center'>
            <Grid item className={classes.display}>
                <div className={classes.iconWrapper} onClick={() => props.setSide(!props.side)}>
                    {props.sideDisplay === true ? null : <i className={"fas fa-chevron-left " + classes.sideIcon}></i>}
                </div>
                <Grid container className={classes.titleWrapper} direction='column' justify='center' alignItems='center'>
                    <div className={classes.title}>
                        temperary room name
                    </div>
                </Grid>
                <ChatDisplay />
                <Grid container justify='space-evenly' alignItems='center' className={classes.inputWrapper} >
                    <Grid container justify='space-evenly' alignItems='center' style={{ maxHeight: 32, overflow: 'hidden' }}> 
                        <i className={"fas fa-plus-circle " + classes.icon}></i>
                        <Input
                            placeholder="Enter Message"
                            inputProps={{ 'aria-label': 'description' }}
                            style={{ width: '60%' }}
                        />
                        <i className={"fas fa-grin-alt " + classes.icon}></i>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}