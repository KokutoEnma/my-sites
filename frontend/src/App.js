import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Footer from 'views/components/Footer'
import HomeScreen from 'views/home/HomeScreen'
import NewBlogScreen from 'views/blog/NewBlogScreen'
import SingleBlogView from 'views/blog/SingleBlogView'
import BlogScreen from 'views/blog/BlogScreen'
import SigninScreen from 'views/sign/SigninScreen'
import SignupScreen from 'views/sign/SignupScreen'
import StatuesScreen from 'views/app/statues/StatuesScreen'
import AppScreen from 'views/app/AppScreen'
import ChatScreen from 'views/app/chat/ChatScreen'


import TopNav from 'views/components/TopNav'
import Image from 'assets/img/light-bg.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: 'calc(100vh)',
        position: 'relative',
        paddingBottom: '128px'
    }
};

function App() {
    return (
        <BrowserRouter>

            <TopNav />
            <Paper style={styles.paperContainer}>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/signin" component={SigninScreen} />
                    <Route exact path="/signup" component={SignupScreen} />
                    <Route exact path="/status" component={StatuesScreen} />
                    <Route exact path="/chat" component={ChatScreen} />
                    <Route exact path="/blog/new" component={NewBlogScreen} />
                    <Route exact path="/blog/:key" component={SingleBlogView} />

                    <Route path="/app" component={AppScreen} />
                    <Route path="/blog" component={BlogScreen} />
                    <Route path="/:any" component={HomeScreen} />
                </Switch>
                <Footer />
            </Paper>


        </BrowserRouter >
    );
}

export default App;
