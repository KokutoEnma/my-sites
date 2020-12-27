import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Header from "components/Header/Header";
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
const useStyles = makeStyles(styles);

export default function TopNav() {
    const classes = useStyles();

    return (
        <Header
            className="topnav"
            brand="Welcome"
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 400,
                color: "white"
            }}
            rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem + " topnav-btn "} >
                        <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} href='/' >
                            <i className={classes.socialIcons + " " + classes.marginRight5 + " fas fa-home"} />{" "}
                            Home
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem + " topnav-btn "}>
                        <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} href='about' >
                            <i className={classes.socialIcons + " " + classes.marginRight5 + " fas fa-info-circle"} />{" "}
                            About
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem + " topnav-btn "}>
                        <Button color="transparent" className={classes.navLink + " " + classes.socialIconsButton} href='app' >
                            <i className={classes.socialIcons + " " + classes.marginRight5 + " fab fa-react"} />{" "}
                            Web Apps
                        </Button>
                    </ListItem>
                </List>
            }
        />
    )
}

