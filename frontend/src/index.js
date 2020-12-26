import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './css/css.js'
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    document.getElementById('root')
);


serviceWorker.unregister();
