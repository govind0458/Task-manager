import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
export default function Navgationbar() {
    return (
        
            <Container className='mt-3'>
                <Navbar bg='dark' expand="lg" className='bg-light navbar-dark'>
                    <Container>
                        <Navbar.Brand href="#home">TaskManager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                                <LinkContainer to='/createtask'><Nav.Link>CreateTask</Nav.Link></LinkContainer>
                                <LinkContainer to='/viewtask'><Nav.Link>ViewTask</Nav.Link></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
    )
}