import React, { Component } from "react";
import API from "../utils/API"
import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Card from "../components/Card"
import employees from "../employees.json"



class Home extends Component {

    state = {
        employees


    }



    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1> Employee Tracker </h1>
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