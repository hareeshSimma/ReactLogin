import React, { Component } from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

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
      
      </div>
    );
  }
}

export default withRouter(App);
