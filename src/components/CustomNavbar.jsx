import React, { Component } from 'react';
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect fixed="top" expand="false" bg="dark" variant="dark">
                  <Navbar.Brand><NavLink to="/"><Image style={{ height: '6vh', width: '10vw' }} src="assets/Logoo.png" /></NavLink></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
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
