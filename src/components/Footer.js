import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        { this.props.children }
        <h5 className="myFooter text-center">Copy Rights Belongs To Me Only</h5>
        
      </div>
    )
  }
}
