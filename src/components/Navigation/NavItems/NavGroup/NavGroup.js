import React from 'react';
import PropTypes from 'prop-types';
import {NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const navGroup = (props) => {
    const links = props.links
        .map(link => {
            return (
                <LinkContainer to={link.href} key={link.href}>
                    <NavDropdown.Item>{link.title}</NavDropdown.Item>
                </LinkContainer>
            );
        });
    return (
        <NavDropdown
            id={"navbar-" + props.title.toLowerCase().replace(' ', '-') + '-' + props.index}
            title={props.title}>
            {links}
        </NavDropdown>
    );
};

navGroup.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default navGroup;
