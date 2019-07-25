import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-element">
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
                <div className="home-element">
                    <Container>
                        <Row>
                            <Col>
                                <Link to="/AllServices"><h2>Services we offer</h2></Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/Hosting">
                                    <img className="service-icon" src="/assets/Computer.png" />
                                </Link>
                                <h4>Hosting</h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/WebDevelopment">
                                    <img className="service-icon" src="/assets/Computer.png" />
                                </Link>
                                <h4>
                                    Web Development
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/WebMaintanence">
                                    <img className="service-icon" src="/assets/Computer.png" />
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
                                    <img className="service-icon" src="/assets/Computer.png" />
                                </Link>
                                <h4>
                                    App Development
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/CustomSoftware">
                                    <img className="service-icon" src="/assets/Computer.png" />
                                </Link>
                                <h4>
                                    Custom Software
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link to="/Licensing">
                                    <img className="service-icon" src="/assets/Computer.png" />
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
                <div className="home-element">
                    <Container>
                        <Row>
                            <Col>
                                <h2>Latest Technology we use</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className="technology-line" color="orange" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img className="language-icon" src="/assets/MongoDB.svg" />
                                <h4>mongoDB</h4>
                                <p>MongoDB is a file base database. This database is used to store user data.</p>
                            </Col>
                            <Col>
                                <img className="language-icon" src="/assets/Express.svg" />
                                <h4>Express.js</h4>
                                <p>Express.js is a javascript framework built for connecting to your database.</p>
                            </Col>
                            <Col>
                                <img className="language-icon" src="/assets/React.svg" />
                                <h4>React</h4>
                                <p>React is a javascript framework built with efficiency and speed in mind.</p>
                            </Col>
                            <Col>
                                <img className="language-icon" src="/assets/Node.svg" />
                                <h4>Node.js</h4>
                                <p>Node.js is a javascript framework which is helpful with creating a server.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img className="language-icon" src="/assets/Sass.svg" />
                                <h4>Sass</h4>
                                <p>Implementing the stylings of css, sass is the newest solution for styling your webpage.</p>
                            </Col>
                            <Col>
                                <img className="language-icon" src="/assets/Bootstrap.svg" />
                                <h4>Bootstrap</h4>
                                <p>Bootstrap is the industry standard in implementing easy to use grid system.</p>
                            </Col>
                            <Col>
                                <img className="language-icon" src="/assets/Redux.svg" />
                                <h4>Redux</h4>
                                <p>Redux pairs with React in order to properly manage screen state changes.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="home-element">
                    <Container>
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="home-element">
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
                                <hr color="#002f6c" />
                                Copyright 2019 WebAmbrosia
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
