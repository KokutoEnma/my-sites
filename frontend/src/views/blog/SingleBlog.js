
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    item: {
        width: '64vw',
        marginTop: '16px',
        minHeight: '32px',
        overflow: 'hidden'
    },
    title: {
        borderBottom: 'black solid 1px'
    },
    body: {
        marginTop: '32px'
    }
}))


export default function SingleBlog(props) {
    const classes = useStyles()
    return (
        <Paper variant="outlined" className={classes.item} style={props.style}>
            <Typography variant="subtitle1" align='center' >
                {props.item.subject}
            </Typography>
            <Typography variant="subtitle1" align='left' className={classes.title}>
                created by: {props.item.owner}
                <Typography style={{ float: 'right' }} variant="body1" align='right' >
                    {props.item.created_time}
                </Typography>
            </Typography>
            <Description description={props.item.description} />
        </Paper>
    )
}


const Description = props => {
    const classes = useStyles()
    return (
        <div className={classes.body}>
            {
                props.description.map((item, key) => (
                    <div key={key} dangerouslySetInnerHTML={{ __html: item === "" ? "<br></br>" : item }}>
                    </div>

                ))
            }
        </div>
    )
}