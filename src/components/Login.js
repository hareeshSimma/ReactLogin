import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import {Link } from 'react-router-dom';
import '../css/style.css'

export default class Login extends Component {

  constructor(props){
    super(props)

    this.state={
    email:'',
    password:''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  } 

  handleChange(e) {
    
    this.setState({
      [e.target.name]: e.target.value
    });
    
   
  }
  login(e){
    e.preventDefault();
  
    const data={
      email:this.state.email,
      password:this.state.password
    }
    
    console.log(data)
  }

  render() {
    return (
      <Provider store={store}>
      <div className="login container">
     
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
  <button type="submit" className="btn btn-primary" onClick = {this.login}>login</button> 
 <span>&nbsp;You don't  have account ?<span><Link to="/signup">Register</Link></span> </span>
  
  </div>
      </div>
      </Provider>
    )
  }
}
