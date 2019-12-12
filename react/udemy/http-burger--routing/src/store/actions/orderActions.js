import * as actionTypes from '../actions/actionsTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (orderId, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: orderId,
    orderData: orderData
  }
}

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  }
}

export const purchaseBurger = (orderData,token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post(`/orders.json?auth=${token}`, orderData)
      .then(response => {
        // this.setState({ loading: false });
        // this.props.history.push('/');
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData))
      })
      .catch(error => {
        // this.setState({ loading: false });
        dispatch(purchaseBurgerFail(error));
      });
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}


export const fetchOrdersSuccess = fetchedOrders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: fetchedOrders
  }
}

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  }
}

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}

export const fetchOrders = (token, userId) => {  
  return dispatch => {
    dispatch(fetchOrdersStart())
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
    axios.get(`/orders.json${queryParams}`).then(response => {
      const fetchedOrders = Object.keys(response.data).map(key => {
        return {
          id: key,
          ingredients: response.data[key].ingredients,
          price: response.data[key].price
        }
      });
      // this.setState({loading:false, orders:fetchedOrders});
      dispatch(fetchOrdersSuccess(fetchedOrders));

    }).catch(error => {
      // this.setState({loading:false, });
      console.log('error fetching orders:');
      console.log(error);
      dispatch(fetchOrdersFail(error));
    })
  }
}