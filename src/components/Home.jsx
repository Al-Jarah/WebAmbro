import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id="first-home-element"style={{ height: '100vh', width: '100vw' }}>
                    <LazyHero color="white" parallaxOffset="100" imageSrc="/assets/Lazy.jpg" minHeight="100vh">
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
                                    <Button>
                                        View our work
                                    </Button>
                                </Col>
                                <Col>
                                    <Button>
                                        Request a quote
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </LazyHero>
                </div>
                <div id="second-home-element" style={{ height: '100vh', width: '100vw' }}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>
                                    Services we offer
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link>
                                    <img src="" />
                                </Link>
                                <h4>
                                    Hosting
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link>
                                    <img src="" />
                                </Link>
                                <h4>
                                    Web Development
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link>
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
                                <Link>
                                    <img src="" />
                                </Link>
                                <h4>
                                    App Development
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link>
                                    <img src="" />
                                </Link>
                                <h4>
                                    Custom Software
                                </h4>
                                <p>
                                    
                                </p>
                            </Col>
                            <Col>
                                <Link>
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
                <div id="third-home-element" style={{ height: '100vh', width: '100vw' }}>
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

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src="" />
                                <h4>
                                    React
                                </h4>
                                <p>
                                    React is one of the most efficient and speedy languages of web development in 2019.
                                    React is one of the most efficient and speedy languages of web development in 2019.
                                </p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h4>
                                    React-Native
                                </h4>
                                <p>
                                    React-Native is one of the most efficient and speedy languages of app development in 2019.
                                    React-Native is one of the most efficient and speedy languages of app development in 2019.
                                </p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h4>
                                    Vue
                                </h4>
                                <p>
                                    Vue is one of the most efficient and speedy languages of web development in 2019.
                                    Vue is one of the most efficient and speedy languages of web development in 2019.
                                </p>
                            </Col>
                            <Col>
                                <img src="" />
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
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                            <Col>
                                <img src="" />
                                <h5></h5>
                                <p></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="fourth-home-element" style={{ height: '100vh', width: '100vw' }}>
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
                <div id="fifth-home-element" style={{ height: '100vh', width: '100vw' }}>
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
            </div>
        )
    }
}
