import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from 'components/CustomButtons/Button'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
import { useState } from 'react'
import SocialAuthSection from './SocialAuthSection'
import { errorlistDecoder } from 'utils/utils'
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: '90vw',
        height: '100vh'
    },
    root2: {
        height: '100%'
    },
    left: {
        width: '40vw',
        flexGrow: 1,
    },
    right: {
        width: '40vw',
        height: '40vh'
    },
    item: {
        width: '60%'
    },
    input: { width: '100%' },
    button: {
        float: 'right',
        marginRight: '10%',
        marginTop: '10%'
    },
    link: {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: 'purple',
        cursor: 'pointer'
    }
}))

export default function SigninScreen() {

    const classes = useStyles();
    const history = useHistory();
    const prevUrl = history.location.state === undefined ? '/' : history.location.state.from
    const { profile } = useSelector(state => state.profile)
    if (profile !== null) history.push(prevUrl)
    return (
        <>
            <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
                <Typography variant="h6" gutterBottom align='center'> Sign Up</Typography>
                <Grid container direction="row" justify="center" alignItems="center">
                    <LeftSection prevUrl={prevUrl} />
                    <SocialAuthSection prevUrl={prevUrl} />
                </Grid>
            </Grid>
        </>
    )
}



function LeftSection(props) {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [errorList, setErrorList] = useState([])
    const handleSignup = (u, p1, p2) => {
        if (u === "" || p1 === "" || p2 === "")
            setErrorList(['All 3 Fields are Required'])
        else {
            let bodyFormData = new FormData();
            bodyFormData.append('username', u)
            bodyFormData.append('password1', p1)
            bodyFormData.append('password2', p2)
            axios.post(
                `/api/auth/login/`, bodyFormData).then(res => {
                    const decoded = errorlistDecoder(res.data)
                    if (decoded.error === false) {
                        history.push(props.prevUrl)
                    }
                    else setErrorList(decoded.msg)
                })
        }
    }

    return (
        <Grid item className={classes.left}>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.root2} spacing={3}>
                <Grid className={classes.item} item>
                    <TextField
                        className={classes.input}
                        label={'Enter Username'}
                        type="name"
                        variant="outlined"
                        size="small"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        onFocus={e => {
                            window.onkeydown = evt => {
                                if (evt.keyCode === 13)
                                    handleSignup(e.target.value, password1, password2)
                            }
                        }}
                    />
                </Grid>
                <Grid className={classes.item} item>
                    <TextField
                        className={classes.input}
                        label={'Enter Password'}
                        type="password"
                        variant="outlined"
                        size="small"
                        value={password1}
                        onChange={e => setPassword1(e.target.value)}
                        onFocus={e => {
                            window.onkeydown = evt => {
                                if (evt.keyCode === 13)
                                    handleSignup(username, e.target.value, password2)
                            }
                        }}
                    />
                </Grid>
                <Grid className={classes.item} item>
                    <TextField
                        className={classes.input}
                        label={'Confirm Password'}
                        type="password"
                        variant="outlined"
                        size="small"
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        onFocus={e => {
                            window.onkeydown = evt => {
                                if (evt.keyCode === 13)
                                    handleSignup(username, password1, e.target.value)
                            }
                        }}
                    />
                </Grid>
                <Grid className={classes.item} item>
                    {errorList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </Grid>
                <Grid className={classes.item} item>
                    <Typography component="span" gutterBottom align='center'>
                        Already have Account? <span className={classes.link} onClick={() => history.push('/signin', { from: props.prevUrl })}>Sign In</span>
                    </Typography>
                </Grid>

            </Grid>
            <Button color="info" className={classes.button} onClick={
                () => handleSignup()} >Enter</Button>
        </Grid>
    )
}
