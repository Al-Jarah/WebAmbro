import React, { Component } from 'react';
import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <div className="outermost-div">
                <Container className="container">
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                            <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="message" placeholder="Message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                            </Jumbotron>
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
