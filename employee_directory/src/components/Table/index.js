import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Table from "react-bootstrap/Table";

function Table(props) {
  console.log(props);
  return (
    <div className="table">
      {props.employees !== undefined ? (
        props.employees.map((employee) => {
          return (
            <wrapper>
              <div className="table ">
                <thead>
                  <tr>
                    <th className="col-sm-2">
                      {/* <td>{props.employees}</td> */}
                      <td>{props.employees_name}</td>
                      <td>{props.employee_salary}</td>
                      {/* <td>{props.employee}</td> */}
                    </th>

                    <th>{props.employees_name}</th>
                    <th>{props.employee_salary}</th>
                  </tr>
                </thead>
              </div>
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
