import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner';



import classes from './Auth.css';

import * as actions from '../../store/actions/index'


class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email address'
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
          errorMessage: 'Please enter a valid email'
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'password'
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          errorMessage: 'Please enter a valid password'
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: false
  }

  componentDidMount() {
    if(!this.props.building && this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (rules === undefined) {
      return isValid;
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value,
          this.state.controls[controlName].validation),
        touched: true,
      }
    }
    this.setState({ controls: updatedControls })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
  }

  switchAuthModeHandler = () => {
    this.setState(previousState => {
      return { isSignup: !previousState.isSignup }
    });
  }

  render() {
    const formElementsArray = [];
    for (const key in this.state.controls) {
      formElementsArray.push(
        {
          id: key,
          config: this.state.controls[key],
        }
      )
    }

    let form = formElementsArray.map(formElement => {
      return <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        onChangeHandler={(event) => this.inputChangedHandler(event, formElement.id)} />
    })



    if (this.props.loading) {
      form = <Spinner />
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>
    }

    let redirectElement = null;
    if (this.props.token) {
      redirectElement = <Redirect to={this.props.authRedirectPath} />
      
    }

    return (
      <div className={classes.Auth}>
        {redirectElement}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button clicked={this.switchAuthModeHandler} btnType="Danger">Switch to {this.state.isSignup ? "Sign in" : "Sign uP"}</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    userId: state.authReducer.userId,
    error: state.authReducer.error,
    loading: state.authReducer.loading,
    building: state.burgerBuilderReducer.building,
    authRedirectPath: state.authReducer.authRedirectPath,

  }
}

const mapDispatchToprops = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Auth);