import React, { Component } from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { UserCard } from 'react-ui-cards';

export default class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <UserCard cardClass="float">
                            <Button>
                                Meet Chase
                            </Button>
                        </UserCard>
                    </Col>
                    <Col xs={12} md={6}>
                        <UserCard cardClass="float">
                            <Button>
                                Meet James
                            </Button>
                        </UserCard>
                    </Col>
                </Row>
                <Row>
                    <h1>For now it is just chaso13 and jameshuntt</h1>
                </Row>
            </Container>
        )
    }
}
