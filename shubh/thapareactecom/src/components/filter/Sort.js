import React from "react";
import styled from "styled-components";

import { BsGrid3X3, BsCardList } from "react-icons/bs";
import { useFilterContext } from "../../context/filtercontext";

const Sort = () => {
  const { filterProducts, gridView, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <Wrapper className="sort-section">
      {/* 1st column */}
      <div className="sorting-list--grid">
        <button
          className={gridView ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsGrid3X3 className="icon" />
        </button>

        <button
          className={!gridView ? "active sort-btn" : "sort-btn"}
          onClick={setListView}
        >
          <BsCardList className="icon" />
        </button>
      </div>

      {/* 2nd column */}
      <div className="product-data">
        <p>{`${filterProducts.length} Product Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1.25rem;
    width: 150px;
    height: 40px;
    .sort-select--option {
      padding: 10px 0;
      font-size: 1.25rem;
      cursor: pointer;
    }
  }
`;

export default Sort;
