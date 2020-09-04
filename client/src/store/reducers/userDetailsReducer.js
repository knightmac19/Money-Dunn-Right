import * as actionTypes from '../actions/userDetailsActions';

const initialState = {
  firstName: '',
  lastName: '',
  authEmail: '',
  fullName: '',
  id: '',
  dateCreated: '',
  lastUpdated: ''
};

const userDetailsReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.GET_FIRSTNAME: 
      return {
        ...state,
        firstName: action.value
      };
    
    case actionTypes.GET_LASTNAME: 
    return {
      ...state,
      lastName: action.value
    };
  
    case actionTypes.GET_AUTH_EMAIL: 
    return {
      ...state,
      authEmail: action.value
    };
  
    case actionTypes.GET_FULLNAME: 
    return {
      ...state,
      fullName: action.value
    };

    case actionTypes.GET_ID: 
    return {
      ...state,
      id: action.value
    };

    case actionTypes.GET_DATE_CREATED: 
    return {
      ...state,
      dateCreated: action.value
    };

    case actionTypes.GET_LAST_UPDATED: 
    return {
      ...state,
      lastUpdated: action.value
    };
    
    default:
      return state;
  }
};

export default userDetailsReducer;