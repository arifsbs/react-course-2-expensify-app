import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify...</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>
      Dashboard
    </NavLink>
    <br />
    <NavLink to='/create' activeClassName='is-active'>
      Create...
    </NavLink>
    <br />
    <NavLink to='/edit' activeClassName='is-active'>
      Edit...
    </NavLink>
    <br />
    <NavLink to='/help' activeClassName='is-active'>
      Help...
    </NavLink>
    <br />
  </header>
);

export default Header;
