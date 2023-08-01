import React from "react";
import { useFilterContext } from "../../context/filtercontext";
import GridView from "../filter/GridView";
import ListView from "../filter/ListView";

const ProductList = () => {
  const { filterProducts, gridView } = useFilterContext();

  if (gridView) {
    return <GridView products={filterProducts} />;
  }
  return <ListView products={filterProducts} />;
};

export default ProductList;
