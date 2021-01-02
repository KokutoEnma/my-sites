
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListTitleSection from './ListTitleSection'
import ListItemSection from './ListItemSection'
import lagcc from 'assets/img/logos/lagcc.jpg'
import sbu from 'assets/img/logos/sbu.png'
import usc from 'assets/img/logos/usc.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20vh'
    },
    root2: {
        width: '60vw',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        height: 'auto',
        minWidth: '106px',
        fontFamily: 'Langar, cursive',
        overflow: 'hidden'
    },
    logo: {
        height: "64px",
        width: "64px",
    },
    name: {
        fontFamily: 'Graduate, cursive',
    },
    paper: {
        height: '96px'
    }
}))


export default function EducationSection() {
    const classes = useStyles()
    const [reverseOrdering, setReverseOrdering] = React.useState(false);
    const list = [
        { name: 'University of Southern California', time: '2020 - 2022', location: 'CA', title: 'MS in CS', logo: usc },
        { name: 'Stony Brook University', time: '2018 - 2020', location: 'NY', title: 'BS in CS && AMS', logo: sbu },
        { name: 'LaGuardia Community College', time: '2015 - 2017', location: 'NY', title: 'AS in CS', logo: lagcc }
    ]
    return (
        <div>
            <ListTitleSection classes={classes} ordering={reverseOrdering} setReverseOrdering={setReverseOrdering} title="My Education" />
            <ListItemSection classes={classes} ordering={reverseOrdering} list={list} />
        </div>
    )
}