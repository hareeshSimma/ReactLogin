import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import UserDetails from './userDetails';

export default class Home extends Component {
  
  render() {
    return (
     
      <div className="home">
       <Header history={this.props.history}/>
       <UserDetails/>
       <Footer/>
      </div>
     
    )
  }
}
