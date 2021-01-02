import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import { useState, useRef } from 'react';
import Popper from 'views/components/popper/SortPopper'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: 96
    },

}))




export default function TitleSection() {
    const classes = useStyles();
    const actions = [
        { name: 'name', action: () => { } },
        { name: 'time', action: () => { } }
    ]

    const profile = useSelector(state => state.profile.profile)
    const newBlogLink = profile === null ? '/signin' : '/blog/new'


    const [popperOpen, setPopperOpen] = useState(false)
    const [popperAnchor, setPopperAnchor] = useState(null)
    const popperBtnRef = useRef(null)
    window.onclick = e => {
        if (e.currentTarget !== popperBtnRef && popperOpen) setPopperOpen(false)
    }
    return (
        <>
            <Grid container className={classes.root} justify="center">
                <Grid item className='radius-btn'>
                    <Button color='transparent' onClick={e => {
                        e.stopPropagation()
                        setPopperAnchor(e.currentTarget)
                        setPopperOpen(!popperOpen)
                    }} ref={popperBtnRef}>
                        Sort
                    </Button>
                </Grid>
                <Grid item className='radius-btn'>
                    <Link to={newBlogLink} style={{ color: 'black' }}>
                        <Button color='transparent'>
                            create new
                    </Button>
                    </Link>
                </Grid>
            </Grid>
            <Popper
                actions={actions}
                open={popperOpen}
                anchorEl={popperAnchor}
                placement='bottom'
            />
        </>
    )
}