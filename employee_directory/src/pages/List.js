import React, { Component } from "react";
import Table from "../components/Table";
import API from "../utils/API";

class List extends Component {
  state = {
    ascending: true,
    search: "",
    result: [],
    error: "",
  };

  // when the component mounts, get a list of all ee's
  componentDidMount() {
    API.getAllEmployees()
      .then((res) => {
        console.log(res.data.data);
        this.setState({ employees: res.data.data });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    // getting whatever triggered change
    let value = event.target.value;
    const name = event.target.name;

    this.filterSearch(value);
    this.setState({
      [name]: value,
    });
  };

  searchEmployee = (query) => {
    API.search(query).then((res) =>
      this.setState({
        result: res.data.results,
        alteredResult: res.data.results,
      })
    );
  };

  //   const ascendingOrder = this.state.result.sort(compare);
  //   this.setState({
  //       ascending: !this.state.ascending,
  //       alteredResult: ascendingOrder,
  //   })
  render() {
    return (
      <div>
        <Table employees={this.state.employees} />
        {/* <SearchResults results={this.state.results} /> */}
      </div>
    );
  }
}

export default List;
