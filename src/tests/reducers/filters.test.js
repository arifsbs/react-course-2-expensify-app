import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@INIT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sort by to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });

  expect(state.sortBy).toEqual("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };

  const state = filterReducer(currentState, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toEqual("date");
});

test("should set text filter", () => {
  const text = "rent";
  const state = filterReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text,
  });

  expect(state.text).toEqual(text);
});

test("should set start date", () => {
  const startDate = moment(0);
  const state = filterReducer(undefined, {
    type: "SET_START_DATE",
    startDate,
  });

  expect(state.startDate).toEqual(startDate);
});

test("should set end date", () => {
  const endDate = moment(0);
  const state = filterReducer(undefined, {
    type: "SET_END_DATE",
    endDate,
  });

  expect(state.endDate).toEqual(endDate);
});
