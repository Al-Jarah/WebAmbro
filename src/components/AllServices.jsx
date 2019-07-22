import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

/*import { Col, Container, Row } from 'react-bootstrap';*/
import AppDev from './allservicescomponents/AppDev';
import WebDev from './allservicescomponents/WebDev';
import Hosting from './allservicescomponents/Hosting';
import Maintanence from './allservicescomponents/Maintanence';
import ControlRoom from './allservicescomponents/assets/ControlRoom.jpg';

export default class AllServices extends Component {
    render() {
        return (
            <div>
                <div style={{
                    height: '100vh',
                    width: '100vw'
                }}>
                    <Image 
                        src={ControlRoom} 
                        style={{ 
                            height: '100vh', 
                            width: '100vw', 
                            zIndex: '-1', 
                            
                        }} 
                    />
                    <div style={{ zIndex: '1' }}>
                        <Hosting />
                    </div>
                </div>
                <div style={{
                    height: '100vh',
                    width: '100vw'
                }}>
                    <Maintanence />
                </div>
                <div style={{
                    height: '100vh',
                    width: '100vw'
                }}>
                    <WebDev />
                </div>
                <div style={{
                    height: '100vh',
                    width: '100vw'
                }}>
                    <AppDev />
                </div>
                
            </div>
            /*<Container>
                <Row>
                    <Col>
                        <h2>
                            kids
                        </h2>
                        <p>
                            buy now 99 cent asian boy special free eggroll with any purchase, 
                            please take all the women free us chinks hate the fucking females
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>

                    </Col>
                </Row>
            </Container>*/
        )
    }
}
