import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        { this.props.children }
        <h1 className="App-title text-center">Welcome to React</h1>
      </div>
    )
  }
}
