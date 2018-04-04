import React, { Component } from 'react';
import '../css/style.css';

export default class Header extends Component {

  logout= ()=> {
    localStorage.clear();
    this.props.history.push('/');
  } 

  render() {
    return (
      <div className="header ">
        { this.props.children }
        <button type="button" className="btn btn-link buttonright"  onClick={this.logout}>  SignOut</button>
   
      </div>
    )
  }
}