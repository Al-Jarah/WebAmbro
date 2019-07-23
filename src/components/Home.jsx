import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Image,Container,Row, Column, Jumbotron } from 'react-bootstrap';
import HostingServices from './homeelements/HostingServices';
import "./Home.scss";

export default class Home extends Component {
    render() {
        const bgImage = "/assets/Blue-Background.jpg";
        const styles = {
            container: {
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover'
          }
        };
        return (
            <div className="home">
                <div className="home-top">
                    <Jumbotron className="home-top-jumbotron" style={styles.container}>
                        <Image className="Logo" src="assets/Logo.png"/>
                        <Image className="Logoo"src="assets/Logoo.png"/>
                        
                    </Jumbotron>
                </div>
               
            </div>
        )
    }
}
