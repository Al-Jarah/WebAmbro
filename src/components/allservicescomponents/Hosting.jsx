import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Hosting extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <p>
                            So heres gonna be a lotta words hopefully a paragraph
                        </p>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1>
                            Hosting with any specifications you may request
                        </h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}
