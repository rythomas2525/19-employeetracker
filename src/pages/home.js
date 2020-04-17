import React, { Component } from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Card from "../components/Card"
import employees from "../employees.json"
import FilterDropdown from "../components/FilterDropdown"







class Home extends Component {

    state = {
        employees,
        filteredEmployees: []
    }






    render() {
        return (
            <div>
                <Container>

                    <FilterDropdown />



                </Container>
            </div >
        )
    }

}

export default Home;