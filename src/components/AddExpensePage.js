import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // console.log(expense);

    //props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <div className='page-header__title'>
              <h1>Add Expense</h1>
            </div>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
