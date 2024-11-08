export const addToCart = (sock, size, quantity) => (dispatch, getState) => {
  let cartItem = {
    name: sock.name,
    _id: sock._id,
    image: sock.image,
    size: size,
    quantity: Number(quantity),
    prices: sock.prices,
    price: sock.prices[0][size] * quantity,
  };

  //alert for more than 10 iems and
  if (cartItem.quantity > 10) {
    alert("You cannot buy more than 10 pieces of an item");
  } else if (cartItem.quantity <= 0) {
    dispatch({ type: "DELETE_FROM_CART", payload: sock });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }

  const cartItems = getState().cartReducer.cartItems;
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
};

//the params above will be used to calculate the total ammount on checkout
export const deleteFromCart = (sock) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: sock });
  const cartItems = getState().cartReducer.cartItems;
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
};

//the above will bw used to delete items entirely from the cart
