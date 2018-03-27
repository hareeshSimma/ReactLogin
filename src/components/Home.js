import React, { Component } from 'react';


export default class Home extends Component {
  constructor(props){
    super(props)

    this.state={
    email:'',
    password:''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.login.bind(this);
  } 

  handleChange(e) {
    e.target.classList.add('active');
    
    this.setState({
      [e.target.name]: e.target.value
    });
    
   
  }
  login(e){
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="home container">
      
       
      <div className="form-group col-4">
    <label >Email address:</label>
    <input type="email" className="form-control" id="email" name="email"  value={ this.state.email } 
            onChange={ this.handleChange }/>
  </div>
  <div className="form-group col-4">
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd" name="password"  value={ this.state.password } 
            onChange={ this.handleChange }/>
  </div>
 <div className="form-group col-4">
  <button type="submit" className="btn btn-primary" onClick = {this.login}>login</button>
    
  </div>
      
       
      </div>
    )
  }
}
