import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import TopNav from 'views/components/TopNav'
import HomeScreen from 'views/home/HomeScreen'

import Image from 'assets/img/light-bg.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
};

function App() {
    return (
        <BrowserRouter>
            <Paper style={styles.paperContainer}>
                <TopNav />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/:any" component={HomeScreen} />
                </Switch>
            </Paper>


        </BrowserRouter >
    );
}

export default App;
