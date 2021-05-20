export const addToCart = (sock, size, quantity) => (dispatch) => {
  let cartItem = {
    name: sock.name,
    id: sock._id,
    image: sock.image,
    size: size,
    quantity: quantity,
    prices: sock.prices,
    price: sock.prices[0] * quantity,
  };

  dispatch({ type: 'ADD_TO_CART', payload: cartItem });
};

//the params will be used to calculate the total ammount on checkout
