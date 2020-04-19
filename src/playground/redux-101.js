import { createStore } from "redux";

// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy:
//     typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
// });

// const incrementCount = ({ incrementBy: incr = 2 } = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof incr === "number" ? incr : 1,
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count = 1 } = {}) => ({
  type: "SET",
  count,
});

//Recuers are
// 1. Pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log("count value is ", store.getState());
// });

store.subscribe(() => {
  console.log("count value is ", store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 8,
// });

//unsubscribe();

store.dispatch(incrementCount({ incrementBy: 8 }));
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 6 }));
store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(decrementCount({ decrementBy: 4 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 115 }));
store.dispatch(setCount());

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "RESET",
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 3,
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "SET",
//   count: 105,
// });

// store.dispatch({
//   type: "SET",
// });
