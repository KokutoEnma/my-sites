
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListTitleSection from './ListTitleSection'
import ListItemSection from './ListItemSection'

import cola from 'assets/img/logos/cola.png'
import bnl from 'assets/img/logos/bnl.gif'
import hunter from 'assets/img/logos/hunter.jpg'
import lagcc from 'assets/img/logos/lagcc.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 64
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


export default function ExperienceSection() {
    const classes = useStyles()
    const [reverseOrdering, setReverseOrdering] = React.useState(false);
    const list = [
        { name: 'City of Los Angeles', time: '1/2021 - present', location: 'CA', title: 'Software Engineer Intern', logo: cola },
        { name: 'Brookhaven National Laboratory', time: '6/2020 - 8/2020', location: 'NY', title: 'Student Research Intern', logo: bnl },
        { name: 'Brookhaven National Laboratory', time: '6/2019 - 8/2019', location: 'NY', title: 'Student Research Intern', logo: bnl },
        { name: 'Hunter College', time: '6/2017 - 8/2017', location: 'NY', title: 'Software Engineer Resaearch Assistant', logo: hunter },
        { name: 'LaGuardia Community College', time: '9/2016 - 6/2017', location: 'NY', title: 'Research Assistant', logo: lagcc }
    ]

    return (
        <>
            <ListTitleSection classes={classes} ordering={reverseOrdering} setReverseOrdering={setReverseOrdering} title="My Education" />
            <ListItemSection classes={classes} ordering={reverseOrdering} list={list} />
        </>
    )
}

