import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set the default state", () => {
  const state = expenseReducer(undefined, { type: "@INIT" });
  expect(state).toEqual([]);
});

test("should remove by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "4",
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expenses", () => {
  const expense = {
    id: "4",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0,
  };

  const action = {
    type: "ADD_EXPENSE",
    expense,
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense if expense found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  };

  const state = expenseReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if expense found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "7612",
    updates: {
      amount,
    },
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
