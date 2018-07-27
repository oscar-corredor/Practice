import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';


import axios from '../../axios-orders';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name'
        },
        value: "",
        validation: {
          required:true,
          minLength: 3,
          maxLength: 5,
          errorMessage: 'Please enter a valid Name'
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: "",
        validation: {
          required:true,
          errorMessage: 'Please enter a valid Street'
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: "",
        validation: {
          required:true,
          errorMessage: 'Please enter a valid Zipcode'
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: "",
        validation: {
          required:true,
          errorMessage: 'Please enter a valid Country'
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'da Email'
        },
        value: "",
        validation: {
          required:true,
          errorMessage: 'Please enter a valid Email'
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{
            value: 'fastest',
            displayValue: 'Fastest'
          },
          {
            value: 'cheapest',
            displayValue: 'Cheapest'
          }
          ]
        },
        value: "fastest"
      }
    },
    loading: false,
    formIsValid : false,
  }

  orderConfirmedHandler = (event) => {
    event.preventDefault();
   
    const formData = {};
    for (const formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    }
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData,

    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  inputChangedHandler = (event, inputIdentifier) => {
    let nFormIsValid = true;
    // this is not deep cloning  
    const nOrderForm = {...this.state.orderForm};
    // we need to clone the element object as well
    const nFormElement = {...nOrderForm[inputIdentifier]}
    nFormElement.value = event.target.value;
    nFormElement.valid = this.checkValidity(nFormElement.value, nFormElement.validation);

    nFormElement.touched = true;

    nOrderForm[inputIdentifier] = nFormElement;
    for (const formElement in nOrderForm) {
      if(nOrderForm[formElement].valid !== undefined && nOrderForm[formElement].valid === false ){
        nFormIsValid = false;
        break;
      }
    }
    console.log(`form validity: ${nFormIsValid}`);
    
    this.setState({orderForm: nOrderForm, formIsValid: nFormIsValid});

  }

  checkValidity(value,rules) {
    let isValid = true;
    if(rules === undefined) {
      return isValid;
    }
    if(rules.required) {      
      isValid = value.trim() !== '' && isValid; 
    } 
    if(rules.minLength){
      isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength){
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  render() {
    let form;
    const formElementsArray = [];
    for (const key in this.state.orderForm) {
      formElementsArray.push(
        {
          id: key,
          config: this.state.orderForm[key],
        }
      )
    }

    if (this.state.loading) {
      form = <Spinner />
    }
    else {
      form = <form className={classes.ContactData} onSubmit={this.orderConfirmedHandler}>

        {formElementsArray.map(element => {
          return <Input 
          key={element.id} 
          elementType={element.config.elementType} 
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          invalid = {!element.config.valid}
          shouldValidate = {element.config.validation}
          touched = {element.config.touched}
          onChangeHandler={(event)=>this.inputChangedHandler(event,element.id)} />
        })}
        <Button disabled={!this.state.formIsValid} btnType="Success">ORDER</Button>
      </form>

    }

    return (
      <div>
        <h4>Enter your data!</h4>
        {form}
      </div>
    );
  }
}


export default withRouter(ContactData);