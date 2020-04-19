import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<Info info='test' />, document.getElementById("app"));
ReactDOM.render(
  <AdminInfo isAdmin={false} info='test' />,
  document.getElementById("app")
);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info='confidential' />,
//   document.getElementById("app")
// );
