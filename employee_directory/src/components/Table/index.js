import React from "react";
import "./style.css";

function Table(props) {
  console.log(props);
  return (
    <div className="table">
      {props.employees !== undefined ? (
        props.employees.map((employee) => {
          <h2>{employee.employee_name}</h2>;
        })
      ) : (
        <h3>Nobody Works Here</h3>
      )}
    </div>
  );
}
export default Table;
