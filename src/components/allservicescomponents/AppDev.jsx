import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class AppDev extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <h1>heres content</h1>
                    </Col>
                    <Col>
                        <p>Some more shit over a background</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>Starting at $7,500 for in-house apps</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
