import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import employees from "./employees.json"

class App extends Component {
  state ={
    employees
  };

  render(){
  return (
    <Wrapper>
      <Title>Employee List</Title>
      {this.state.employees.map(employee =>(
        <EmployeeCard
        id= {employee.id}
        name={employee.name}
        image={employee.image}
        email={employee.email}
        username={employee.username}
        phone={employee.phone}
        occupation = {employee.occupation}
        location= {employee.location}
        />
      ))}
    </Wrapper>
  );
  }
}

export default App;
