import { createContext, useContext, useEffect, useState } from 'react';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';

const ShoppingCartContext = createContext();

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const cartQuantity = cartItems.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);

  const getItemQuantity = (id) => {
    const targetItem = cartItems.find((cartItem) => {
      return cartItem.id === id;
    });

    return targetItem ? targetItem.quantity : 0;
  };
  
  const increaseCartQuantity = (id) => {
    setCartItems((currCartItems) => {
        const targetItem = currCartItems.find((currCartItem) => {
          return currCartItem.id === id;
        });

        if (!targetItem) {
          return [...currCartItems, {id, quantity : 1}];
        }

        return currCartItems.map((currCartItem) => {
          if (currCartItem.id === id) {
            return {id,  quantity: currCartItem.quantity + 1};
          }
          return currCartItem;
        });
    });
  };

  const decreaseCartQualtity = (id) => {
    setCartItems((currCartItems) => {
      const targetItem = currCartItems.find((currCartItem) => {
        return currCartItem.id === id;
      });

      const { quantity } = targetItem;
    
      if (quantity === 1) {
        return currCartItems.filter((currCartItem) => {
          return currCartItem.id !== id;
        });
      }

      return currCartItems.map((currCartItem) => {
        if (currCartItem.id === id) {
          return {...currCartItem, quantity: currCartItem.quantity - 1};
        } 
        return currCartItem;
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

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  )
}


export { useShoppingCartContext, ShoppingCartProvider };