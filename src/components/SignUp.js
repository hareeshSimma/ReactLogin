import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../css/style.css'
export default class SignUp extends Component {

  constructor(){
    super();

    this.state={
      userName:'',
      email:'',
      password:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  register(e){
    e.preventDefault();

    const registerData={
      userName:this.state.userName,
      email:this.state.email,
      password:this.state.password
    }
  localStorage.setItem("registration data",JSON.stringify(registerData));
  console.log(registerData);
  }
  render() {
    return (
      <div className="signup container">
        { this.props.children }
        <div className="form-group col-4 offset-4">
    <label >Name:</label>
    <input type="text" className="form-control" id="userName" name="userName"  value={ this.state.userName } 
            onChange={ this.handleChange }/>
     </div>
     <div className="form-group col-4 offset-4">
    <label >Email address:</label>
    <input type="email" className="form-control" id="email" name="email"  value={ this.state.email } 
            onChange={ this.handleChange }/>
     </div>
  <div className="form-group col-4 offset-4">
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd" name="password"  value={ this.state.password } 
            onChange={ this.handleChange }/>
  </div>
 <div className="form-group col-4 offset-4">
  <button type="submit" className="btn btn-primary" onClick = {this.register}>Register</button> 
 <span>&nbsp; Already have account??<span><Link to="/">Login</Link></span></span>
  </div>
      </div>
    )
  }
}
