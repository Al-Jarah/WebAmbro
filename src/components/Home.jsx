import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import {Link} from 'react-router-dom';
import { Image,Container,Row, Column, Jumbotron,Button } from 'react-bootstrap';
import HostingServices from './homeelements/HostingServices';
import Particles from 'react-particles-js';
import "./Home.scss";

export default class Home extends Component {
    render() {
        return (
            
            <div className="home">
                
                <div className="home-top">
                
                        <Particles className="Particles" params={{
                                "particles": {
                                    "number": {
                                        "value": 200,
                                        "density": {
                                            "enable": true,
                                            "value_area": 900
                                        }
                                    },
                                    "line_linked": {
                                        "enable": true,
                                        "opacity": 0.02
                                    },
                                    "move": {
                                        "direction": "right",
                                        "speed": 0.18
                                    },
                                    "size": {
                                        "value": 2
                                    },
                                    "opacity": {
                                        "anim": {
                                            "enable": true,
                                            "speed": 2.2,
                                            "opacity_min": 0.05
                                        }
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onclick": {
                                            "enable": true,
                                            "mode": "push"
                                        }
                                    },
                                    "modes": {
                                        "push": {
                                            "particles_nb": 1
                                        }
                                    }
                                },
                                "retina_detect": true
                            }} />
                        
                        <Image className="Logo" src="assets/Logo.png"/>
                        <Image className="Logoo"src="assets/Logoo.png"/>
                        <div className="jumbo-text">
                        <p className="home-top-text">Looking for a fresh creative design, a new application, or maybe just want to integrate the newest technologies into your exsisting software.
                          At Web Ambrosia we strive to create the best product possible by using the latest technologies, UX and UI standards, 
                          world class creative teams, and developers. At Web Ambrosia we want to make your dream a reality for some of the best prices in the industry. </p>
                          <Link to="/Contact"><Button className="contact-Button-Home" variant="outline-light" size="lg">Request A Quote</Button></Link>

                        </div>
                    
                </div>
               
            </div>
        )
    }
}
