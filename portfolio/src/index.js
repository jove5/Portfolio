import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome     from '@fortawesome/fontawesome';
import brands          from '@fortawesome/fontawesome-free-brands';
import solid           from '@fortawesome/fontawesome-free-solid';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
