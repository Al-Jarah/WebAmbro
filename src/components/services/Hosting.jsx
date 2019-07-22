import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BasicHosting from './hosting/BasicHosting';
import MediumHosting from './hosting/MediumHosting';
import FullServiceHosting from './hosting/FullServiceHosting';

export default class Hosting extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <BasicHosting />
                    </Col>
                    <Col xs={12} md={4}>
                        <MediumHosting />
                    </Col>
                    <Col xs={12} md={4}>
                        <FullServiceHosting />
                    </Col>
                </Row>
            </Container>
        )
    }
}
