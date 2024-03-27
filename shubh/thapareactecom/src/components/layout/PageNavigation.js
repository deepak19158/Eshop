import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to={"/"}>Home</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  text-transform: capitalize;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding-left: 5rem;
  a {
    font-size: 2rem;
  }
`;

export default PageNavigation;
