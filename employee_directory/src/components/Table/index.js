import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Table from "react-bootstrap/Table";

class Employees extends Component {
  // set state to work with
  state = {
    data: [],
    filterData: [],
  };

  // handle input search field and update state
  // this.state.filter to sort the data with the new name
  {props.employees !== undefined ? (
    props.employees.map((employee) => {
  
  handleSearch = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    let searchName = event.target.value;
    // let newName = this.state.data.filter((name) => name.name.first === searchName);
    let newName = this.state.data.filter(
      (name) => name.name.first.indexOf(searchName) !== -1
    );
    // console.log(newName);
    this.setState({
      filterData: newName,
    });
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          {" "}
          <div className="row header-row">
            <div className="col-sm-3" />
            <div className="col-sm-6 text-center">
              <h1>Employee Directory</h1>
              <hr></hr>
              <h5>Search by first name or sort by clicking on 'Name'</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row main-page">
            <div className="col-sm-1" />
            <div className="col-sm-10 text-center">
              <div className="search-bar row">
                <div className="col-sm-3" />
                <div className="col-sm-6 search-div">
                  <input
                    type="text"
                    class="form-control input-search"
                    onChange={this.handleSearch}
                    placeholder="Search for employee"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="col-sm-3" />
              </div>

              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col" onClick={this.handleSort}>
                      Name
                    </th>
                    <th scope="col">Salary</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filterData.map((user) => {
                    // console.log(user);
                    return (
                      <tr>
                        <th scope="row">
                          <img src={user.picture.medium} />
                        </th>
                        <td key={Employees.login.uuid}>
                          {user.name.first + " " + user.name.last}
                        </td>
                        <td>{user.phone}</td>
                        <td>
                          <a href="">{user.email}</a>
                        </td>
                        <td>{user.dob.age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Employees;
