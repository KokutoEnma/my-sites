import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 128,
        marginBottom: 128
    },
    btn: {
        backgroundColor: 'lightblue',
        color: 'black',
        marginLeft: 16,
        marginRight: 16
    }
}))


export default function AppScreen() {
    const classes = useStyles()
    const list = [
        { name: 'my status', link: '/status', newWindow: false },
        { name: 'chat', link: '/chat', newWindow: false },
        { name: 'flask movie cinema', link: { pathname: 'http://flsk.shaw-yu.com' }, newWindow: true },
        { name: 'node angular responsive movie cinema', link: { pathname: 'http://ndng.shaw-yu.com' }, newWindow: true }
    ]
    return (
        <Grid container>
            <Grid container className={classes.root} justify='center'>
                {
                    list.map(item => (
                        <Link to={item.link} key={item.name} target={item.newWindow ? '_blank' : ''}>
                            <div className={'radius-btn ' + classes.btn}>
                                <Button color='transparent'>
                                    {item.name}
                                </Button>
                            </div>
                        </Link>
                    ))
                }
            </Grid>
        </Grid>
    )
}