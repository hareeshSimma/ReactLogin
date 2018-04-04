import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { ScaleLoader } from 'react-spinners';

import { allUsersDetails } from '../actions/userActions';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

      loading:this.props.allUsers && this.props.allUsers.length? false:true
    }
    // this.props.allUsersDetails();
    
  } 

  componentDidMount(){
    this.props.allUsersDetails(); 
    // console.log(this.props.allUsersDetails())
  };

  componentDidUpdate(nextProps, nextState){
    if( nextProps.allUsers.length !== this.props.allUsers.length){
      this.setState({loading:false});
    }
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
                  <td>Edit</td>                                                    
                  <td>Delete</td>                                                    
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
