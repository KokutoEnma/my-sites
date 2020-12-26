import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import TopNav from 'views/components/TopNav'
import HomeScreen from 'views/home/HomeScreen'


function App() {
    return (
        <BrowserRouter>
            <div className="background"></div>
            <TopNav />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/:any" component={HomeScreen} />
            </Switch>


        </BrowserRouter >
    );
}

export default App;
