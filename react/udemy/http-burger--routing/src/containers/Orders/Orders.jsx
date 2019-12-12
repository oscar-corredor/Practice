import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner'

import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'

class Orders extends Component {
  state = { orders: [],
  loading:true }

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() { 
    let renderedContent = <Spinner/>
    if(!this.props.loading) {
      renderedContent = this.props.orders
        .map(order =><Order key={order.id} ingredients={order.ingredients} price={order.price} />)
    }
    return (
      <div>
      {renderedContent}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    token: state.authReducer.token,
    userId: state.authReducer.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));