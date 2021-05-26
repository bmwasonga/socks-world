export const cartReducer = (state = { cartItems: [] }, action) => {
  //local storage funcionality

  switch (action.type) {
    case 'ADD_TO_CART':
      const sockExist = state.cartItems.find(
        (c) => c._id === action.payload._id
      );

      if (sockExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
