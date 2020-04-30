import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
//import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibilityExpenses from "./selectors/expenses";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
// store.dispatch(
//   addExpense({
//     description: "Water Bill",
//     note: "Bill for the month of March",
//     amount: 4500,
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "Gas Bill",
//     note: "Bill for the month of March",
//     createdAt: 1000,
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "Rent",
//     amount: 109500,
//     createdAt: 2000,
//   })
// );

// store.dispatch(setTextFilter("gas"));

// const expenses = store.getState().expenses;
// const filters = store.getState().filters;
// console.log("..>> ", getVisibilityExpenses(expenses, filters));

// setTimeout(() => {
//   const filter = store.dispatch(setTextFilter("bill"));
//   console.log("..>> ", getVisibilityExpenses(expenses, filter));
// }, 2000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// store.dispatch(startSetExpenses()).then(() => {
//   console.log("11111111.......");
//   ReactDOM.render(jsx, document.getElementById("app"));
// });

const ddf = store.dispatch(startSetExpenses());

//console.log(ddf);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

// store.dispatch(
//   startSetExpenses().then(() => {
//     console.log("11111111.......");
//     ReactDOM.render(jsx, document.getElementById("app"));
//   })
// );

//ReactDOM.render(<AppRouter />, document.getElementById("app"));
