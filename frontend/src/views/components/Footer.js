import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => (
    {
        footer: {
            marginTop: 64
        }
    }
));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>

            <Grid container justify='center'>
                <Link to='/' style={{ color: 'black' }}>
                    <Grid item className='radius-btn'>
                        <Button color="transparent" >
                            <i className="fas fa-home" />
                            About me
                        </Button>
                    </Grid>
                </Link>
                <Link to='/blog' style={{ color: 'black' }}>
                    <Grid item className='radius-btn'>
                        <Button color="transparent">
                            <i className="fab fa-medium" />
                            Blog
                        </Button>
                    </Grid>
                </Link>
                <Link to='/app' style={{ color: 'black' }}>
                    <Grid item className='radius-btn'>
                        <Button color="transparent">
                            <i className="fab fa-react" />
                            Web Apps
                        </Button>
                    </Grid>
                </Link>
            </Grid>
            <Grid container justify='center'>
                <Grid item className='radius-btn'>
                    <Button color="transparent" href="https://github.com/AhoyKakkoii" >
                        <i className="fab fa-github"></i>
                    </Button>
                </Grid>
                <Grid item className='radius-btn'>
                    <Button color="transparent" href="https://www.linkedin.com/in/shaw-yu/"  >
                        <i className="fab fa-linkedin-in"></i>
                    </Button>
                </Grid>
                <Grid item className='radius-btn'>
                    <Button color="transparent" href="mailto:shenghuiyu@yahoo.com" >
                        <i className="fas fa-envelope-square"></i>
                    </Button>
                </Grid>
            </Grid>
        </footer>
    );
}