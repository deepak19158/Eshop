const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { productId, color, quantity, product } = action.payload;
      let existingproduct = state.cart.filter(
        (curElem) => curElem.productId + curElem.color === productId + color
      );

      if (existingproduct.length > 0) {
        const updatedCart = state.cart.map((curElem) => {
          if (curElem.productId + curElem.color === productId + color) {
            curElem.quantity = Math.min(
              curElem.quantity + quantity,
              product.stock
            );
          }
          return curElem;
        });
        return {
          ...state,
          cart: updatedCart,
        };
      }

      let cartProduct = {
        productId: productId,
        name: product.name,
        color,
        quantity,
        image: product.image[0].url,
        price: product.price,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_ITEM":
      const updatedCart = state.cart.filter((curElem) => {
        return curElem.productId + curElem.color !== action.payload;
      });
      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_INCREMENT":
      const updatCart = state.cart.map((curElem) => {
        if (curElem.productId + curElem.color === action.payload) {
          curElem.quantity += 1;
          curElem.quantity = Math.min(curElem.quantity, 5);
        }
        return curElem;
      });

      return {
        ...state,
        cart: updatCart,
      };

    case "SET_DECREMENT":
      const newCart = state.cart.map((curElem) => {
        if (curElem.productId + curElem.color === action.payload) {
          curElem.quantity -= 1;
          curElem.quantity = Math.max(curElem.quantity, 1);
        }
        return curElem;
      });

      return {
        ...state,
        cart: newCart,
      };

    case "CART_TOTAL_ITEM_PRICE":
      let { total_item, total_price } = state.cart.reduce(
        (initialVal, curElem) => {
          initialVal.total_item += curElem.quantity;
          initialVal.total_price += curElem.price * curElem.quantity;
          return initialVal;
        },
        { total_item: 0, total_price: 0 }
      );

      return {
        ...state,
        total_item,
        total_price,
      };

    case "UPDATE_CART_FROM_STORAGE":
      let localCartData = localStorage.getItem("thapaCart");
      let parsedData = JSON.parse(localCartData);
      if (!Array.isArray(parsedData)) {
        parsedData = [];
      }

      return {
        ...state,
        cart: parsedData,
      };

    default:
      return state;
  }
};

export default cartReducer;
