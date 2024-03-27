import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducer/cartReducer";
import axios from "axios";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("thapaCart");
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 0,
};

//updating the prouducts in mongodb database
const updateProductInMongo = async (data) => {
  if (localStorage.getItem("authToken") === null) return;

  try {
    let updatedData = []; //intiralized array to diractly replace items in mongo db

    data = data.forEach((element) => {
      let { productId, quantity, color, price, name, image } = element;
      updatedData.push({ productId, quantity, color, price, name, image });
    });

    await axios.post(`http://localhost:5000/cart/addItem`, updatedData, {
      //api call to push data in mongo
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
    });
  } catch (error) {
    console.log("ERROR AT UPDATING PRODUCT", error);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (productId, color, quantity, product) => {
    //action for reducer to add procudt to cart

    dispatch({
      type: "ADD_TO_CART",
      payload: { productId, color, quantity, product },
    });
  };

  const setIncrement = (id) => {
    //action for incrementing for cart page
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const setDecrement = (_id) => {
    //action for decrementing for cart page
    dispatch({ type: "SET_DECREMENT", payload: _id });
  };

  const removeItem = (_id) => {
    //action for removing item for cart page
    dispatch({ type: "REMOVE_ITEM", payload: _id });
  };

  const clearCart = () => {
    //action for clearing item for cart page
    dispatch({ type: "CLEAR_CART" });
  };

  const updateCartFromStorage = () => {
    dispatch({ type: "UPDATE_CART_FROM_STORAGE" });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM_PRICE" });
    localStorage.setItem("thapaCart", JSON.stringify(state.cart));
    updateProductInMongo(state.cart); //in all the case : whether adding item deleting item clearing cart we r only using one update api
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrement,
        setDecrement,
        updateCartFromStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
