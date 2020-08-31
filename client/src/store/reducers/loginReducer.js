import * as actionTypes from '../actions/loginActions';

const initialState = {
  email:'',
  password:'',
  redirectToHome: false
};

const loginReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.WRITE_LOGIN_EMAIL:
      return {
        ...state,
         email: action.value
      };

    case actionTypes.WRITE_LOGIN_PASS:
    return {
      ...state,
        password: action.value
    };

    case actionTypes.SET_HOME_REDIRECT:
    return {
      ...state,
        redirectToHome: true
    };
  }

  return state;
};

export default loginReducer;