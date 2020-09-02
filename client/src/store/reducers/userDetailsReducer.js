import * as actionTypes from '../actions/userDetailsActions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  fullName: '',
  id: '',
  dateCreated: '',
  lastUpdated: ''
};

const userDetailsReducer = (state = initialState, action) => {
  switch ( action.type ) {
    
    
    default:
      return state;
  }
};

export default userDetailsReducer;