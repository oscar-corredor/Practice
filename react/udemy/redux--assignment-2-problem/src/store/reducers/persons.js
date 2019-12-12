import * as actionTypes from '../actions'

const initialPerson = {
  id: Math.random(), // not really unique but good enough here!
  name: 'ODCO',
  age: Math.floor(Math.random() * 40)
}
const initialState = {
  
  persons: [initialPerson]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
    console.log(actionTypes.ADD_PERSON);
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: action.name,
      age: action.age
  }
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      }

    case actionTypes.DELETE_PERSON:
    console.log(actionTypes.DELETE_PERSON);
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      }
    
    default:
    console.log('default reducer case');
      return state;
  }
}

export default reducer;