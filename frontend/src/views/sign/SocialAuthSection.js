
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button";
import Typography from '@material-ui/core/Typography';
import { urls } from 'utils/config'


const useStyles = makeStyles(() => ({
    root: {
        width: '45vw',
        height: '40vh'
    },
    root2: {
        marginTop: '24px'
    },
    item: {

    },
    title: {
        marginTop: '24px'
    }
}))

export default function SocialAuthSection(props) {
    const classes = useStyles()

    const list = [
        { name: 'Google', icon: <i className="fab fa-google"></i>, href: `http://${urls.backend}/api/auth/google/login/?next=${props.prevUrl}` },
        { name: 'Github', icon: <i className="fab fa-github"></i>, href: `http://${urls.backend}/api/auth/github/login/?next=${props.prevUrl}` },
        { name: 'Facebook', icon: <i className="fab fa-facebook"></i>, href: `http://${urls.backend}/api/auth/facebook/login/?next=${props.prevUrl}` },
    ]
    return (
        <Grid item className={classes.root}>
            <Typography variant="body2" gutterBottom align={'center'} className={classes.title}> Or Sign In with</Typography>
            <Grid container justify='center' direction='row' alignItems='center' className={classes.root2}>
                {
                    list.map((item, index) => (
                        <Grid container item key={index} justify='center'>

                            <Grid item >
                                <Grid container justify='center' className='radius-btn'>
                                    <Button color='transparent' href={item.href}>
                                        {item.icon}{item.name}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}