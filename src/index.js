import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidebar from './sidebar';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
