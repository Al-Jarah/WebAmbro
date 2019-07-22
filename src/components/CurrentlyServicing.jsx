import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap'

export default class CurrentlyServicing extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <p>
                            sandwich
                        </p>
                    </Col>
                    <Col xs={12} md={9}>
                        <Image />
                    </Col>
                </Row>
            </Container>
        )
    }
}
