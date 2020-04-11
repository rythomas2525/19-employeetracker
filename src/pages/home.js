import React, { Component } from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Card from "../components/Card"
import employees from "../employees.json"
import FilterDropdown from "../components/FilterDropdown"

const names = ['Steffanie', 'Justin', 'Dale'];





class Home extends Component {

    state = {
        employees
    }






    render() {
        return (
            <div>
                <Container>
                    <Row>

                        <Col size="md-10">

                            {names.filter(name => name.includes('a')).map(filteredName => (
                                <li>
                                    {filteredName}
                                </li>
                            ))}

                        </Col>
                        <Col size="md-2">
                            <FilterDropdown />
                        </Col>
                    </Row>
                    <Row>
                        {this.state.employees.map(employees => (

                            <Col size="md-4">
                                <Card
                                    name={employees.name}
                                    title={employees.title}
                                    manager={employees.manager}
                                    yearhired={employees.yearhired}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
        )
    }

}

export default Home;