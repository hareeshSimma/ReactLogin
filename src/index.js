import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
// import { render } from 'react-dom';
//  import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(

<BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
