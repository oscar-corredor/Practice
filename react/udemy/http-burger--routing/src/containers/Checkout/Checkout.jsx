import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: null
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const nIngredients = {};
    let nTotalPrice = null;
    for (const entry of query.entries()) {
      //['bacon','1']
      if(entry[0] === 'price') {
        nTotalPrice = parseFloat(entry[1]);
      }
      else nIngredients[entry[0]] = +entry[1];
    }
    this.setState({ingredients:nIngredients, totalPrice: nTotalPrice});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    console.log("checkoutContinuedHandler");
    
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
          <Route 
          path={this.props.match.path + '/contact-data'} 
          render ={() => <ContactData ingredients = {this.state.ingredients} totalPrice={this.state.totalPrice}/>}/>
      </div>
    );
  }
}


export default Checkout;