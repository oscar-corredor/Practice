import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

class Checkout extends Component {  

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {

    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let element = <Redirect to='/' />
    
    if (this.props.ingredients) {
      const purchasedRedirect = this.props.purchased? <Redirect to='/'/> : null
      element =
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData} />
      </div>
      
    }
    return (
      <div>
        {element}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    purchased: state.orderReducer.purchased
  }
}

export default connect(mapStateToProps)(Checkout);