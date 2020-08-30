const initialState = {
  firstName: '',
  lastName: '',
  firstEmail: '',
  secondEmail: '',
  password: '',
  hasEmail: false,
  hasPassword: false
};

const reducer = (state = initialState, action) => {
  if (action.type === 'WRITE_FIRSTNAME') {
    return {
      ...state,
      firstName: action.value
    };
  };
  if (action.type === 'WRITE_LASTNAME') {
    return {
      ...state,
      lastName: action.value
    };
  };
  if (action.type === 'WRITE_FIRST_EMAIL') {
    return {
      ...state,
      firstEmail: action.value,
      hasEmail: true
    };
  };
  if (action.type === 'WRITE_SECOND_EMAIL') {
    return {
      ...state,
      secondEmail: action.value
    };
  };
  if (action.type === 'WRITE_PASSWORD') {
    return {
      ...state,
      password: action.value,
      hasPassword: true
    };
  };

  return state;
};

export default reducer;