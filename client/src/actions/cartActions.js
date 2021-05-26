export const addToCart = (sock, size, quantity) => (dispatch, getState) => {
  let cartItem = {
    name: sock.name,
    id: sock._id,
    image: sock.image,
    size: size,
    quantity: quantity,
    prices: sock.prices,
    price: sock.prices[0][size] * quantity,
  };

  dispatch({ type: 'ADD_TO_CART', payload: cartItem });

  const cartItems = getState().cartReducer.cartItems;

  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
};

//the params above will be used to calculate the total ammount on checkout
export const deleteFromCart = (sock) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: sock });
  const cartItems = getState().cartReducer.cartItems;
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
};
