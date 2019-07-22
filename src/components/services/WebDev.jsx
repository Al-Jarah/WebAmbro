import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BasicReactApp from './webdev/BasicReactApp';
import SemiIntensiveReactApp from './webdev/SemiIntensiveReactApp';
import FullServiceReactApp from './webdev/FullServiceReactApp';

export default class WebDev extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <BasicReactApp />
                    </Col>
                    <Col xs={12} md={4}>
                        <SemiIntensiveReactApp />
                    </Col>
                    <Col xs={12} md={4}>
                        <FullServiceReactApp />
                    </Col>
                </Row>
            </Container>
        )
    }
}
