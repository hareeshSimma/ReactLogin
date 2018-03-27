import React, { Component } from 'react';


export default class Home extends Component {
  // constructor(){
  //   super()
  // } 

  render() {
    return (
      <div className="home container">
      
       
      <div className="form-group col-4">
    <label >Email address:</label>
    <input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group col-4">
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd"/>
  </div>
 <div className="form-group col-4">
  <button type="submit" className="btn btn-primary">Submit</button>
    
  </div>
      
       
      </div>
    )
  }
}
