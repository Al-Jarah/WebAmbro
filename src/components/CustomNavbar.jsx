import React, { Component } from 'react';
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="#home"><Image style={{ height: '6vh', width: '10vw' }} src="assets/Logoo.png" /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/CurrentlySupporting">Currently Supporting</Nav.Link>
                      </Nav>
                      <Nav>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="/Hosting">Hosting</NavDropdown.Item>
                          <NavDropdown.Item href="/WebDevelopment">Web Development</NavDropdown.Item>
                          <NavDropdown.Item href="/WebsiteMaintanence">Maintanence</NavDropdown.Item>
                          <NavDropdown.Item href="/AppDevelopment">App Development</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/AllServices">All Services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/AboutUs">About Us</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
            </div>
        )
    }
}
