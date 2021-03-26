
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { createChatAction } from 'store/reducers/chatReducer'

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);



export default function Profile() {
    const profileState = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const chatState = useSelector(state => state.chat)
    const classes = useStyles()
    if (profileState.loaded === false)
        return null
    else if (profileState.loaded === true && profileState.profile === null)
        return (
            <>
                please sign in to chat:
                <Link to={{ pathname: '/signin', state: { from: '/chat' } }}>
                    signin
                </Link>
            </>
        )
    else {
        if (chatState.loaded === false)
            axios.get('/api/chat/').then(res => {
                const createChat = item => dispatch(createChatAction(item))
                createChat(res.data)
            })
        return (
            <div style={{ overflow: 'hidden' }}>
                <img className={classes.socialIcons + " " + classes.marginRight5} alt='' src={profileState.profile.avatar_url} width={32} height={32} />
                {profileState.profile.display_name}
            </div>
        )
    }
}