import React from "react";
import "./style.css";

function Table(props) {
  console.log(props);
  return (
    <div className="table">
      {props.employees !== undefined ? (
        props.employees.map((employee) => {
          return (
            <wrapper>
              <table className="">
                <p>{employee.employee_name}</p>
                <p>{employee.employee_salary}</p>
              </table>
            </wrapper>
          );
        })
      ) : (
        <h3>Nobody Works Here</h3>
      )}
    </div>
  );
}
export default Table;
