import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 4
        }}
    />
);

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id="first-home-element"style={{ height: '100vh', width: '100vw' }}>
                    <LazyHero opacity=".6" color="white" parallaxOffset="100" imageSrc="/assets/Lazy.jpg" minHeight="100vh">
                        <Container>
                            <Row>
                                <Col>
                                    <img style={{ height: '75%', width: '50%' }} src="assets/Logo.png" />
                                </Col>
                                <Col>
                                    <h4>WebAmbrosia LLC</h4>
                                    <p>Offering a wide range of tech solutions. There is no project that we can not handle.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <br></br>
                                    <br></br>
                                    <p>
                                        lorem ipsum hsidhdhdhskjakjdcn odfhjvojfv udovshvjo ouhoduv hh uh u houhdousofu uoh uohu
                                        lorem ipsum hsidhdhdhskjakjdcn odfhjvojfv udovshvjo ouhoduv hh uh u houhdousofu uoh uohu
                                        lorem ipsum hsidhdhdhskjakjdcn odfhjvojfv udovshvjo ouhoduv hh uh u houhdousofu uoh uohu
                                        lorem ipsum hsidhdhdhskjakjdcn odfhjvojfv udovshvjo ouhoduv hh uh u houhdousofu uoh uohu
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to="/RecentWork">
                                        <Button>
                                            View our work
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/RequestQuote">
                                        <Button>
                                            Request a quote
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </LazyHero>
                </div>
                <div id="second-home-element" style={{ background: '#01579b', height: '100vh', width: '100vw' }}>
                    <Container>
                        <Row>
                            <Col>
                                <Link to="/AllServices">
                                    <h2>
                                        Services we offer
                                    </h2>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/Hosting">
                                    <img src="" />
                                </Link>
                                <h4>
                                    Hosting
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/WebDevelopment">
                                    <img src="/assets/webdevphoto.png" style={{ height: '35%', width: '45%' }} />
                                </Link>
                                <h4>
                                    Web Development
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/WebMaintanence">
                                    <img src="" />
                                </Link>
                                <h4>
                                    Web Maintanence
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/AppDevelopment">
                                    <img src="/assets/AppDev.jpg" />
                                </Link>
                                <h4>
                                    App Development
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/CustomSoftware">
                                    <img src="" />
                                </Link>
                                <h4>
                                    Custom Software
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/Licensing">
                                    <img src="" />
                                </Link>
                                <h4>
                                    License our premade software
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="third-home-element" style={{ background: '#ffa06d', height: '100vh', width: '100vw' }}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>
                                    Latest Technology we use
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ColoredLine color="#002f6c" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img style={{ height: '15%', width: '25%'}} src="/assets/React.png" />
                                <h4>
                                    React
                                </h4>
                                <p>
                                    React is one of the most efficient and speedy languages of web development in 2019.
                                    React is one of the most efficient and speedy languages of web development in 2019.
                                </p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/React-Native.png" />
                                <h4>
                                    React-Native
                                </h4>
                                <p>
                                    React-Native is one of the most efficient and speedy languages of app development in 2019.
                                    React-Native is one of the most efficient and speedy languages of app development in 2019.
                                </p>
                            </Col>
                            <Col>
                                <img style={{ height: '30%', width: '35%'}} src="/assets/Vue.jpg" />
                                <h4>
                                    Vue
                                </h4>
                                <p>
                                    Vue is one of the most efficient and speedy languages of web development in 2019.
                                    Vue is one of the most efficient and speedy languages of web development in 2019.
                                </p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '45%'}} src="/assets/Vue-Native.png" />
                                <h4>
                                    Vue-Native
                                </h4>
                                <p>
                                    Vue-Native is one of the most efficient and speedy languages of web development in 2019.
                                    Vue-Native is one of the most efficient and speedy languages of web development in 2019.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Angular.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Auth0.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Bootstrap.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/C++.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/cPanel.jpeg" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Express.jpeg" />
                                <h5></h5>
                                <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Java.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Javascript.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/MongoDB.jpg" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Node.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/Python.jpg" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img style={{ height: '20%', width: '30%'}} src="/assets/SSLTLS.png" />
                                <h5></h5>
                                <p></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="fourth-home-element" style={{ background: '#4f83cc', height: '100vh', width: '100vw' }}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Security</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src="" />
                                <h4>SSL</h4>
                                <p>security shit</p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h4>Hashing</h4>
                                <p>security shit</p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h4>Booby Traps</h4>
                                <p>security shit</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="fifth-home-element" style={{ background: '#ff6e40', height: '100vh', width: '100vw' }}>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Need custom software?</h1>
                                <h2>let's start with a free quote</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="text"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="text"></input>
                            </Col>
                            <Col>
                                <input type="text"></input>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col>
                                <h3>
                                    WebAmbrosia LLC
                                </h3>
                                <h5>
                                    518-
                                </h5>
                                <h5>
                                    WebAmbrosia00@gmail.com
                                </h5>
                            </Col>
                            <Col>

                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ColoredLine color="#002f6c" />
                                Copyright 2019 WebAmbrosia
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
