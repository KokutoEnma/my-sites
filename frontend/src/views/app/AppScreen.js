import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 128,
        marginBottom: 128,
        width: '80%'
    },
    btn: {
        backgroundColor: 'lightblue',
        color: 'black'
    }
}))


export default function AppScreen() {
    const classes = useStyles()
    const list = [
        { name: 'my status', link: '/status', newWindow: false },
        { name: 'chat', link: '/chat', newWindow: false },
        { name: 'flask movie cinema', link: { pathname: 'http://flsk.shaw-yu.com' }, newWindow: true },
        { name: 'node angular responsive movie cinema', link: { pathname: 'http://ndng.shaw-yu.com' }, newWindow: true },
        { name: 'Simple Manga Reader', link: { pathname: 'http://manga.shaw-yu.com' }, newWindow: true }
    ]
    return (
        <Grid container justify='center'>
            <Grid container className={classes.root} justify='flex-start' spacing={10}>
                {
                    list.map(item => (
                        <Link to={item.link} key={item.name} target={item.newWindow ? '_blank' : ''}>
                            <Grid item className={'radius-btn ' + classes.btn}>
                                <Button color='transparent'>
                                    {item.name}
                                </Button>
                            </Grid>
                        </Link>
                    ))
                }
            </Grid>
        </Grid>
    )
}