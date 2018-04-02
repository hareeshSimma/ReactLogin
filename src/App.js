import React, { Component } from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

// alert messages
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

// import Header from './components/Header';
// import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path='/' component={Login}/>
          <Route  path='/signup' component={SignUp}/>          
          <Route  path='/home' component={Home}/>
                  
        </Switch>
        <Alert stack={{limit: 3}} timeout={5000} />

      </div>
    );
  }
}

export default withRouter(App);
