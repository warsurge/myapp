import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "./utils/API";

class EmployeeContainer extends Component{
    state={
        result:{},
        search: ""
    };

    searchEmployee = query =>{
        API.search(query)
        .then(res => this.setState({result:res.data}))
        .catch(err => console.log(err));
    }

    handleInputChange =event =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event =>{
        event.preventDefault();
        this.searchEmployee(this.state.search);
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card heading ={this.state.result.name || "Search for an Employee to Begin"}>
                            <EmployeeDetail
                            name={this.state.result.name}
                            src={this.state.result.picture}
                            city={this.state.result.city}  
                            state = {this.state.result.state}
                            email={this.state.result.email}
                            username={this.state.result.login}/>
                        </Card>
                    </Col>
                    <Col size ="md-4">
                        <Card heading ="Search">
                            <SearchForm 
                            value={this.state.search}
                            handleInputChange ={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EmployeeContainer;