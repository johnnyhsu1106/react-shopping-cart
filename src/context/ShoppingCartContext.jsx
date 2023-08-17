import { createContext, useContext, useState } from 'react';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';

const ShoppingCartContext = createContext();

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const cartQuantity = cartItems.reduce((totalQuantity, cartItem) => {
    return totalQuantity + cartItem.quantity;
  }, 0);


  const getItemQuantity = (id) => {
    const targetItem = cartItems.find((cartItem) => {
      return cartItem.id === id;
    });

    return targetItem ? targetItem.quantity : 0;
  };
  
  const increaseCartQuantity = (id) => {
    setCartItems((currCartItems) => {
        // found if targetItem in the cart
        const targetItem = currCartItems.find((currCartItem) => {
          return currCartItem.id === id;
        });

        // if target item is not found, add new shopping item
        if (!targetItem) {
          return [...currCartItems, {id, quantity : 1}];
        }
        // if target item is found, update its quantity
        return currCartItems.map((currCartItem) => {
          return currCartItem.id === id ? {...currCartItem,  quantity: currCartItem.quantity + 1} : currCartItem;
        });
    });
  };

  const decreaseCartQualtity = (id) => {
    setCartItems((currCartItems) => {
      const targetItem = currCartItems.find((currCartItem) => {
        return currCartItem.id === id;
      });

      // the target item must be in the cart
      const { quantity } = targetItem;
      // if quantity is 1, remove target item from shopping cart
      if (quantity === 1) {
        return currCartItems.filter((currCartItem) => {
          return currCartItem.id !== id;
        });
      }
      // if quantity > 1, update its quantity
      return currCartItems.map((currCartItem) => {
        return currCartItem.id === id ? {...currCartItem, quantity: currCartItem.quantity - 1} : currCartItem;
      });
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((currCartItems) => {
      return currCartItems.filter((currCartItem) => {
        return currCartItem.id !== id;
      });
    });
  };

  const openShoppingCart = () => {
    setIsShoppingCartOpen(true);
  };

  const closeShoppingCart = () => {
    setIsShoppingCartOpen(false);
  };

  const value = {
    isShoppingCartOpen,
    cartQuantity,
    cartItems,
    getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQualtity, 
    removeItemFromCart,
    openShoppingCart,
    closeShoppingCart
  };
  // place <ShoppingCart /> inside ShoppingCartProvider
  // because those pages, which are children, should have shopping cart component.
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
      <ShoppingCart /> 
    </ShoppingCartContext.Provider>
  )
}


export { useShoppingCartContext, ShoppingCartProvider };