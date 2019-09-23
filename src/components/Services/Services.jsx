import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';

export default class Services extends Component {
    render() {
        return (
            <div className="all-services-main-container">
                <div className="all-services-sub-container-one">
                    <h3>Services</h3>
                    <p>Here at WebAmbrosia, we have equipped ourselves with the latest technologies to meet all of your tech solutions.</p>
                </div>
                <div className="all-services-sub-container-two">
                    <p>Services</p>
                </div>
                <div className="all-services-sub-container-three">
                    <p>Services</p>
                </div>
                <div className="all-services-sub-container-four">
                    <p>Services</p>
                </div>
                <div className="all-services-sub-container-five">
                    <p>Services</p>
                </div>
                <div className="all-services-sub-container-six">
                    <p>Services</p>
                </div>
            </div>
        )
    }
}
