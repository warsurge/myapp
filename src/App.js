import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import employees from "./employees.json"


class App extends Component {
  state = {
    employees
  };

  handleNameSort = (name, order) => {
    this.setState({ employees: this.state.employees.sort((a, b) => (a.name[name] > b.name[name] ? order : -order)) })
  }

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
            <div className="h4 my-0 py-2">
              <div className="col">
                <div className="d-inline">
                  Type Name, Username, or Occupation to Search
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
