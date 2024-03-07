import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light">
            <Container>
            <Link to="/" className="navbar-brand">Lexica</Link>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="#ai-sentence-generation">Use it in a Sentence</Nav.Link>
                <Nav.Link href="#type-sentence">Write it Out</Nav.Link>
                <Nav.Link as={Link} to="/about-page">Learn About Us</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: <a href="#login">Dylan</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

