import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InHouseApp from './appdev/InHouseApp';
import BasicWebApp from './appdev/BasicWebApp';
import FullServiceWebApp from './appdev/FullServiceWebApp';

export default class AppDev extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <InHouseApp />
                    </Col>
                    <Col xs={12} md={4}>
                        <BasicWebApp />
                    </Col>
                    <Col xs={12} md={4}>
                        <FullServiceWebApp />
                    </Col>
                </Row>
            </Container>
        )
    }
}
