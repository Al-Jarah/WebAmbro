import React, { Component } from 'react';
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import "./CustomNavbar.scss";

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect fixed="top" expand="false" className="navbar" variant="dark" >
                <Navbar.Brand className="navbar-brand"><NavLink to="/"><Image className="logo-nav" src="assets/Logo.png" /><Image className="logoo-nav" src="assets/Logoo.png" /></NavLink></Navbar.Brand>
                  <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                      <Nav.Link><NavLink to="/CurrentlySupporting">Currently Supporting</NavLink></Nav.Link>
                      </Nav>
                      <Nav>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                          <NavDropdown.Item><NavLink to="/Hosting">Hosting</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink to="/WebDevelopment">Web Development</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink to="/WebsiteMaintanence">Maintanence</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink to="/AppDevelopment">App Development</NavLink></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink to="/AllServices">All Services</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><NavLink to="/AboutUs">About Us</NavLink></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
            </div>
        )
    }
}
