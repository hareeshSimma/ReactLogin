import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { allUsersDetails } from '../actions/userActions';
import '../css/style.css';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

      loading:this.props.allUsers && this.props.allUsers.length? false:true
    }
    
  } 

  componentDidMount(){
    this.props.allUsersDetails(); 
  };

  componentDidUpdate(nextProps, nextState){
    if( nextProps.allUsers.length !== this.props.allUsers.length){
      this.setState({loading:false});
    }
  }
edit=(item)=>{
  console.log(item)
}

delete=(index,state)=>{
console.log(index)
this.props.allUsers.splice(index,1);
this.setState({
  allUsers:state.allUsers
})
}
  render() {
    return (
      <React.Fragment>
        <h2>All users list:</h2>
        <div className="loading-icon">
          <ScaleLoader color={'#123abc'} loading={this.state.loading} />
        </div>
        <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {this.props.allUsers && this.props.allUsers.map((item,index)=>{
              return (
                <tr key={index}>
                  <td key={index}>{index+1}</td>
                   <td key={item.userName}>{item.userName}</td>
                  <td key={item.email}>{item.email}</td>  
                  <td className="edit" onClick={this.edit.bind(this,item)}>Edit</td>                                                    
                  <td className="edit" onClick={this.delete.bind(this,index)}>Delete</td>                                                    
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      </React.Fragment>
      
    )
  }
}
const mapStateToProps = (state) => {
  return {
    allUsers : state.user.allUsers
  }
} 

export default withRouter(connect(mapStateToProps,{allUsersDetails})(UserDetails));
