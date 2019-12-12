import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
  
  render() {
    this.props.logOut();
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return <Redirect to='/'/>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(actions.logOut())
  }
}
 
export default connect(null,mapDispatchToProps)(Logout);