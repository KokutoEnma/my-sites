
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button";
import axios from 'axios'
import { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    root: {
        marginTop: 128,
        marginBottom: 128
    },
    error: {
        textAlign: 'center',
        color: 'red'
    }
}))


export default function StatusScreen() {
    const classes = useStyles()
    const [status, setStatus] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get(`/api/app/status/get/`)
            console.log(result.data)
            if (result.data.error === false) setStatus(result.data.status)
            else {
                setStatus(false)
                setError(result.data.msg)
            }
        }
        fetch()
    }, [])
    const pushStatus = type => {
        axios.get(`/api/app/status/set/?status=${type === 'on'}`).then(res => {
            if (res.data.error === false) setStatus(res.data.status)
            else {
                setStatus(false)
                setError(res.data.msg)
            }
        })
    }
    return (
        <Grid container >
            <Grid container justify='center' className={classes.root}>
                <Grid>
                    I am right now:
                    {
                        status ?
                            <span><i className="fas fa-laptop-code" style={{ color: 'green' }}></i>Working</span> :
                            <span><i className="fas fa-coffee"></i>Not Working</span>
                    }
                </Grid>
                <Grid container justify='center'>
                    <Button color='info' onClick={() => pushStatus('off')}>
                        Go off
                    </Button>
                    <Button color='info' onClick={() => pushStatus('on')}>
                        Start
                    </Button>

                </Grid>
                <div className={classes.error}>{error}</div>
            </Grid>
        </Grid>
    )
}