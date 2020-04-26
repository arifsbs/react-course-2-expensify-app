import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify...</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>
      Dashboard
    </NavLink>
    <NavLink to='/create' activeClassName='is-active'>
      &nbsp;Create Expense
    </NavLink>
  </header>
);

export default Header;
