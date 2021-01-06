import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import axios from 'axios'
import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from "components/Header/Header";
import Button from "components/CustomButtons/Button";
import Popper from './popper/ProfilePopper'
import { createProfileAction, deleteProfileAction } from 'store/reducers/profileReducer';
import { useDispatch, useSelector } from 'react-redux';

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function TopNav(props) {
    const classes = useStyles();

    const history = useHistory()
    const dispatch = useDispatch();
    const profileState = useSelector(state => state.profile)

    useEffect(() => {
        const fetchProfile = async () => {
            const result = await axios.get(`/api/auth/profile/`)
            if (result.data.online !== false) createProfile(result.data.user)
            else deleteProfile()
        }

        const createProfile = profile => dispatch(createProfileAction(profile))
        const deleteProfile = () => dispatch(deleteProfileAction())
        if (profileState.loaded === false)
            fetchProfile()
    }, [history, profileState, dispatch])


    return (
        <>
            <Header
                className="topnav"
                brand="Welcome"
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 150,
                    color: "white"
                }}
                leftLinks={
                    <List className={classes.list}>
                        <ListItem className={classes.listItem + " radius-btn "} >
                            <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} href="https://github.com/AhoyKakkoii" >
                                <i className="fab fa-github"></i>
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem + " radius-btn "}>
                            <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} href="https://www.linkedin.com/in/shaw-yu/"  >
                                <i className="fab fa-linkedin-in"></i>
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem + " radius-btn "}>
                            <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} href="mailto:shenghuiyu@yahoo.com" >
                                <i className="fas fa-envelope-square"></i>
                            </Button>
                        </ListItem>
                    </List>
                }
                rightLinks={
                    <List className={classes.list}>
                        <ListItem className={classes.listItem + " radius-btn "} >
                            <Link to='/' style={{ color: 'black' }}>
                                <div>
                                    <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} >
                                        <i className={classes.socialIcons + " " + classes.marginRight5 + " fas fa-home"} />
                                        Home
                                    </Button>
                                </div>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.listItem + " radius-btn "}>
                            <Link to='/blog' style={{ color: 'black' }}>
                                <div>
                                    <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} >
                                        <i className={classes.socialIcons + " " + classes.marginRight5 + " fab fa-medium"} />
                                        Blog
                                    </Button>
                                </div>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.listItem + " radius-btn "}>
                            <Link to='/app' style={{ color: 'black' }}>
                                <div>
                                    <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} >
                                        <i className={classes.socialIcons + " " + classes.marginRight5 + " fab fa-react"} />
                                        Web Apps
                                    </Button>
                                </div>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.listItem + " radius-btn "} >
                            <ProfileTag profile={profileState} />
                        </ListItem>
                    </List>
                }
            />

        </>
    )
}


const ProfileTag = props => {

    const [current, setCurrent] = useState('Sign In')
    const history = useHistory();

    let component = null
    if (history.location !== undefined) {
        if (history.location.pathname === '/signin') {
            component = <SignUpButtonInSignIn setCurrent={setCurrent} current={current} />
        } else if (history.location.pathname === '/signup') {
            component = <SignInButtonInSignUp setCurrent={setCurrent} current={current} />
        }
        else if (props.profile.loaded === false) {
            component = null
        }
        else if (props.profile.profile === null) {
            component = <SignInButton setCurrent={setCurrent} current={current} />
        }
        else {
            component = <Profile setCurrent={setCurrent} profile={props.profile.profile} current={current} />
        }
    }

    return (
        component
    )
}


const SignUpButtonInSignIn = props => {
    const classes = useStyles();
    const history = useHistory();
    const prevUrl = history.location.state === undefined ? '/' : history.location.state.from
    return (
        <Link to={{ pathname: '/signup', state: { from: prevUrl } }} onClick={() => props.setCurrent('Sign In')} style={{ color: 'black' }}>
            <div>
                <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton}>
                    <i className={classes.socialIcons + " " + classes.marginRight5 + " fas fa-sign-in-alt"} />
                    {props.current}
                </Button>
            </div>
        </Link>
    )

}

const SignInButtonInSignUp = props => {
    const classes = useStyles();
    const history = useHistory();
    const prevUrl = history.location.state === undefined ? '/' : history.location.state.from
    return (
        <Link to={{ pathname: '/signin', state: { from: prevUrl } }} onClick={() => props.setCurrent('Sign Up')} style={{ color: 'black' }}>
            <div>
                <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} >
                    <i className={classes.socialIcons + " " + classes.marginRight5 + " fas fa-sign-in-alt"} />
                    {props.current}
                </Button>
            </div>
        </Link>
    )
}



const SignInButton = props => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Link to={{ pathname: '/signin', state: { from: history.location.pathname } }} onClick={() => props.setCurrent('Sign Up')} style={{ color: 'black' }}>
            <div>
                <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton}>
                    <i className={classes.socialIcons + " " + classes.marginRight5 + " fas fa-sign-in-alt"} />
                    {props.current}
                </Button>
            </div>
        </Link>
    )
}

const Profile = props => {
    const classes = useStyles();
    const [profileOpen, setProfileOpen] = useState(false)
    const [profileAnchor, setProfileAnchor] = useState(null)
    const profileBtnRef = useRef(null)
    window.onclick = e => {
        if (e.currentTarget !== profileBtnRef && profileOpen) setProfileOpen(false)
    }
    return (
        <>
            <Button ref={profileBtnRef} color="transparent" className={classes.navLink + " " + classes.socialIconsButton} onClick={e => {
                e.stopPropagation()
                setProfileAnchor(e.currentTarget)
                setProfileOpen(!profileOpen)
                props.setCurrent('profile')
            }} >
                <Popper open={profileOpen} anchorEl={profileAnchor} placement='bottom-end' />
                <img className={classes.socialIcons + " " + classes.marginRight5} alt='' src={props.profile.avatar_url} width={20} height={20} />
                {props.profile.display_name}
            </Button>

        </>
    )
}