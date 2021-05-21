export const cartReducer = (state = { cartItems: [] }, action) => {
  //local storage funcionality

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};
