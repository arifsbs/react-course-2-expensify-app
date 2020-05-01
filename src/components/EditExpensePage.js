import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // console.log("edit for submitted...> ", expense);
    this.props.editExpense(this.props.expense.id, { ...expense });
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  //console.log("props ... ", props);
  // render() {
  //   <div>
  //     Editing the expense with id of {this.props.match.params.id}
  //     <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
  //     <button onClick={this.onRemove}>Remove</button>
  //   </div>;
  // }
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

// const mapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find(
//       (expense) => expense.id === props.match.params.id
//     ),
//   };
// };

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, { ...expense })),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

// const mapStateToProps = (state, props) => {
//   console.log(state.expenses.length);
//   const tmp = state.expenses.filter((expense) => {
//     console.log(expense.id);
//     console.log(props.match.params.id);
//     console.log(expense.id === props.match.params.id);
//     return expense.id === props.match.params.id;
//   });
//   console.log("tmp ", tmp);
//   expense: tmp;
// };

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
