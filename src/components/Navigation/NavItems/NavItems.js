import React from 'react';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const navItems = (props) => {
    return (
        <React.Fragment>
            <LinkContainer to="/">
                <Nav.Link>
                    <FontAwesomeIcon icon={faHome}/>{' '}Home
                </Nav.Link>
            </LinkContainer>
        </React.Fragment>
    );
};

export default navItems;
