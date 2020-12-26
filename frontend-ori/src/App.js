
import TopNav from './components/tools/TopNav'
import HomeScreen from './components/home/HomeScreen'

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppScreen from './components/app/AppScreen';
import AboutScreen from './components/about/AboutScreen';
import MinecraftScreen from './components/minecraft/MinecraftScreen';
import ChatLobby from './components/chat/ChatLobby'

function App() {
    return (
        <BrowserRouter>
            <TopNav />
            <div className="screen-wrapper">
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/app" component={AppScreen} />
                    <Route exact path="/app/chat" component={ChatLobby} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/minecraftinfo" component={MinecraftScreen} />
                    <Route path="/:any" component={HomeScreen} />
                </Switch>
            </div>

        </BrowserRouter>
    );
}

export default App;
