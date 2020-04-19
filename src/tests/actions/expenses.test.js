import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import uuid from "uuid";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });

  const removeAction = {
    type: "REMOVE_EXPENSE",
    id: "123abc",
  };

  expect(action).toEqual(removeAction);
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    description: "Rent",
    amount: 100,
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      description: "Rent",
      amount: 100,
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    note: "rent for the month of June",
    amount: 500,
    createdAt: 100,
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };

  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
