import React from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Card from "../components/Card"


function yearhired() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1> Employee Tracker </h1>
                    </Col>
                </Row>
                <Row>
                    <Card></Card>
                </Row>
            </Container>
        </div>
    )
}

export default yearhired;