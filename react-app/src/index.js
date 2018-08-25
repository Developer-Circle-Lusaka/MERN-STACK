import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppComponent/>, document.getElementById('root'));
registerServiceWorker();
