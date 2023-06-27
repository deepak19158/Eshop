const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => {
        return curElem.price;
      });
      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        gridView: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { sorting_value, filterProducts } = state;
      let tmp = [...filterProducts];

      if (sorting_value === "a-z") {
        newSortData = tmp.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (sorting_value === "z-a") {
        newSortData = tmp.sort((b, a) => a.name.localeCompare(b.name));
      }

      if (sorting_value === "lowest") {
        newSortData = tmp.sort((a, b) => a.price - b.price);
      }

      if (sorting_value === "highest") {
        newSortData = tmp.sort((b, a) => a.price - b.price);
      }

      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let temp = [...allProducts];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        temp = temp.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category && category !== "All") {
        temp = temp.filter((curElem) => {
          return curElem.category.toLowerCase().includes(category);
        });
      }

      if (company && company !== "All") {
        temp = temp.filter((curElem) => {
          return curElem.company.toLowerCase().includes(company);
        });
      }

      if (color && color !== "All") {
        temp = temp.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if (price) {
        temp = temp.filter((curElem) => {
          return curElem.price <= price;
        });
      }

      return {
        ...state,
        filterProducts: temp,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
