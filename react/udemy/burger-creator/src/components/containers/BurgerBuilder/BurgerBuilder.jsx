import React, { Component } from 'react';
import Aux from '../../../hoc/aux';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,

    purchaseable: false,

    purchasing: false,
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).reduce((currentValue, key) => currentValue + ingredients[key], 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedIngredients[type] + 1;
    const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newTotalPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    if (updatedIngredients[type] > 0) {
      updatedIngredients[type] = updatedIngredients[type] - 1;
      const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ totalPrice: newTotalPrice, ingredients: updatedIngredients });
    }
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing:false});
  }

  purchaseContinueHandler = () => {
    alert('you continue!')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <div>
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <Modal
            show={this.state.purchasing}
            modalClosed={this.purchaseCancelHandler}>
            <OrderSummary 
              ingredients={this.state.ingredients}
              purchaseCancelled = {this.purchaseCancelHandler}
              purchaseContinued = {this.purchaseContinueHandler}
              price={this.state.totalPrice.toFixed(2)}/>
          </Modal>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler} />
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;