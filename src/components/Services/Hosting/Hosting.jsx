import React, { Component } from 'react';
import { ProductCard } from 'react-ui-cards';
import { Row, Col, Container } from 'react-bootstrap';

export default class Hosting extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </div>
        )
    }
}
