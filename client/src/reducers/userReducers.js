export const registerUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'USER_REG_REQ':
      return {
        loading: true,
      };
    case 'USER_REG_SUCCESS':
      return {
        loading: false,
        success: true,
      };
    case 'USER_REG_FAILED':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
