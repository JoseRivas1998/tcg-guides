import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import background from '../../assets/img/vintage-wallpaper.png';
import classes from './HomerBanner.module.css';

const homeBanner = (props) => {
    return (
        <Container fluid className={classes.HomeBanner} style={{backgroundImage: 'url(' + background + ')'}}>
            <Row>
                <Col className={["text-center", classes.HomeBannerSpacing]}>
                    <h1>Jos&eacute;'s Programming Guides</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default homeBanner;
