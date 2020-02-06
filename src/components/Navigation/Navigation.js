import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import NavItems from './NavItems/NavItems';

const navigation = (props) => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="md">
                <LinkContainer to="/">
                    <Navbar.Brand>Programming Guides</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="main-navbar-nav"/>
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav>
                        <NavItems/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default navigation;
