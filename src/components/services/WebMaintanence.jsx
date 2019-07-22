import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MinimalPackage from './webmaintanence/MinimalPackage';
import EnhancedPackage from './webmaintanence/EnhancedPackage';
import CompletePackage from './webmaintanence/CompletePackage';

export default class WebMaintanence extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <MinimalPackage />
                    </Col>
                    <Col xs={12} md={4}>
                        <EnhancedPackage />
                    </Col>
                    <Col xs={12} md={4}>
                        <CompletePackage />
                    </Col>
                </Row>
            </Container>
        )
    }
}
