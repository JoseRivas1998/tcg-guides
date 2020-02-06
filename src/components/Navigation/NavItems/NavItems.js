import React from 'react';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

import NavGroup from './NavGroup/NavGroup';

const NAV_GROUPS = [
    {
        title: "Git",
        links: [
            {
                href: '/git/basics',
                title: 'Git Basics'
            }
        ]
    }
];

const navItems = (props) => {
    const navGroups = NAV_GROUPS
        .map((navGroup, index) => {
            return (
                <NavGroup
                    key={index}
                    index={index}
                    title={navGroup.title}
                    icon={navGroup.icon}
                    links={navGroup.links}/>
            );
        });
    return (
        <React.Fragment>
            <LinkContainer to="/">
                <Nav.Link>
                    <FontAwesomeIcon icon={faHome}/>{' '}Home
                </Nav.Link>
            </LinkContainer>
            {navGroups}
        </React.Fragment>
    );
};

export default navItems;
