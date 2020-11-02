import React, { Component } from "react";
import Table from "../components/Table";
import API from "../utils/API";

class List extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  };

  // when the component mounts, get a list of all ee's
  componentDidMount() {
    API.getAllEmployees()
      .then((res) => this.setState({ employees: res.data.message }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Table />
        {/* /* <SearchResults results={this.state.results} /> */}
      </div>
    );
  }
}

export default List;
