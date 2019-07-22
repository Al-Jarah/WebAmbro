import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class WebDev extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1>Utilizing the most efficient frameworks of 2019 we at webambrosia deliver speedy content with 99.99% uptime guarantee</h1>
                    </Col>
                    <Col xs={12} md={6}>
                        <p>we got this shit just give us the bag we got all ur needs homie you just gotta trust us and hire us and pay us</p>
                    </Col>
                </Row>
                <Row>
                    <h3>Starting at $5,500 for a basic site we can accomplish all of your goals in no time</h3>
                </Row>
            </Container>
        )
    }
}
