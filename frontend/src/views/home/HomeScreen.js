import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import EducationSection from 'views/home/EducationSection'
import ExperienceSection from 'views/home/ExperienceSection'

import { motion } from 'framer-motion'

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import bg from 'assets/img/blue-sky-bg.png'

const useStyles = makeStyles(styles);

export default function Screen() {
    const classes = useStyles();
    return (
        <>
            <Parallax image={bg}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <motion.h1 className={classes.title + " home-title-text"} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5 }}>
                                    Welcome
                                </motion.h1>
                                <motion.h3 className={classes.subtitle + " home-title-text"} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5 }}>
                                    To My Website
                                </motion.h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <EducationSection />
            <ExperienceSection />
        </>
    )

}