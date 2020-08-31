import * as actionTypes from '../actions';

const initialState = {
  firstName: '',
  lastName: '',
  firstEmail: '',
  secondEmail: '',
  password: '',
  hasEmail: false,
  hasPassword: false,
  redirectToLogin: false
};

const signupReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.WRITE_FIRSTNAME:
      return {
        ...state,
        firstName: action.value,
      };
    case actionTypes.WRITE_LASTNAME:
      return {
        ...state,
        lastName: action.value
      };
    case actionTypes.WRITE_FIRST_EMAIL:
      return {
        ...state,
        firstEmail: action.value,
        hasEmail: true
      };
    case actionTypes.WRITE_SECOND_EMAIL:
      return {
        ...state,
        secondEmail: action.value
      };
    case actionTypes.WRITE_PASSWORD:
      return {
        ...state,
        password: action.value,
        hasPassword: true
      };
    case actionTypes.SET_LOGIN_REDIRECT:
      return {
        ...state,
        redirectToLogin: true
      };
  }

  return state;
  
};

export default signupReducer;