import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './css/css.js'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Provider } from 'react-redux';
import store from './store/store'


const Index = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(
    <React.Fragment>
        <Index />
    </React.Fragment>,
    document.getElementById('root')
);


serviceWorker.unregister();
