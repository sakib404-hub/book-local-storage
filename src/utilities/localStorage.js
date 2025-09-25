const getFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cart");
  const actualCartItem = JSON.parse(cartItems);
  return actualCartItem ? actualCartItem : [];
};

const saveToLocalStorage = (cart) => {
  const jsonData = JSON.stringify(cart);
  localStorage.setItem("cart", jsonData);
};

const addItemsToLocalStorage = (id, quantity = 1) => {
  //Getting the Cart Items
  const cartItem = getFromLocalStorage();

  //checking if the cart items really exist
  const exist = cartItem.find((item) => item.id === parseInt(id));
  if (exist) {
    exist.quantity += 1;
  } else {
    cartItem.push({ id, quantity });
  }
  saveToLocalStorage(cartItem);
};

const removeFromCart = (id) => {
  const cartItem = getFromLocalStorage();
  const remainingCartItem = cartItem.filter((item) => item.id !== parseInt(id));
  saveToLocalStorage(remainingCartItem);
};

export { getFromLocalStorage, addItemsToLocalStorage, removeFromCart };
