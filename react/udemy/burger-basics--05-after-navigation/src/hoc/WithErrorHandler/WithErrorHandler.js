import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axiosInstance) => {
  return class extends Component {
    state = {
      error: null,

    }

    componentWillMount() {
      this.requestInterceptor = axiosInstance.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      })

      this.responseInterceptor = axiosInstance.interceptors.response.use(res => res, err => {
        this.setState({ error: err })
      });
    }

    componentWillUnmount() {

      axiosInstance.interceptors.request.eject(this.requestInterceptor);
      axiosInstance.interceptors.response.eject(this.responseInterceptor);

    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />

        </Aux>
      );
    }
  }
}

export default withErrorHandler;