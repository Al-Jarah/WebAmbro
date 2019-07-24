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
                <div className="overlay"></div>
                <div className="home-top">
                    
                    
                        <Image className="home-top-background-image" src="assets/Light-Background6.jpg"/>
                        <Image className="Logo" src="assets/Logo.png"/>
                        <Image className="Logoo"src="assets/Logoo.png"/>
                        <div className="jumbo-text">
                        <p className="home-top-text">Looking for a fresh creative design, a new application, or maybe just want to integrate the newest technologies into your exsisting software.
                          At Web Ambrosia we strive to create the best product possible by using the latest technologies,UX and UI standards, 
                          and world class creative teams and developers. At Web Ambrosia we want to make your dream a reality, we offer custom development,
                          stunning design, hosting for your website or application, SEO services to ensure your product
                          is ranking well on Google, and all of that for some of the best prices in the industry. So whether you are looking to expand your
                          current business and bring in more customers, start up a new business, host your website or application, have an application made for ios/android ,or we even do in house business 
                          software. Whatever your need choose Web Ambrosia for quality products and services fit for a God.</p>
                        </div>
                    
                </div>
               
            </div>
        )
    }
}
