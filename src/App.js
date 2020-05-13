import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import employees from "./employees.json"


class App extends Component {
  state = {
    employees,
    name: 1,
    username: 1,
    sort: ""
  };


  handleSort = (name, order) => {
    this.setState({ employees: this.state.employees.sort((a, b) => (a[name] > b[name] ? order : -order)) })
  }

  searchFilter = (name) => {
    this.setState({
      employees: employees.filter(employee => {
        return employee.name.toLowerCase().includes(name.toLowerCase())
          || employee.occupation.toLowerCase().includes(name.toLowerCase())
          || employee.username.toLowerCase().includes(name.toLowerCase());
      })
    })
  }

  render() {
    return (

      <Wrapper>

        <Title>Employee List
        <div>
            <input type="text" placeholder="Search" onChange={(e) => this.searchFilter(e.target.value)} />
            <div className="h4 my-0 p-2">
              <div className="col">
                <div className="d-inline">
                  Type Name, Username, or Occupation to Search <br />
                  Click Here on
                  <a onClick={() => { this.handleSort("name", this.state.name); this.setState({ name: -this.state.name, sort: "name" }) }} style={{ cursor: 'pointer' }}> Name </a> or
                  <a onClick={() => { this.handleSort("username", this.state.username); this.setState({ username: -this.state.username, sort: "username" }) }} style={{ cursor: 'pointer' }}> Username </a>
                  to sort!
              </div>
              </div>
            </div>
          </div>
        </Title>

        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            picture={employee.picture}
            email={employee.email}
            username={employee.username}
            phone={employee.phone}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>

    );
  }
}

export default App;
