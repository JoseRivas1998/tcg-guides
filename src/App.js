import React from 'react';
import {Switch, Route} from 'react-router';
import {Container, Row, Col} from 'react-bootstrap';

import './App.css';
import Layout from './hoc/Layout/Layout';
import HomeBanner from './components/HomeBanner/HomeBanner';
import HomePage from './containers/HomePage/HomePage';
import Git from './pages/git/Git';

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomeBanner}/>
                </Switch>
                <Container>
                    <Row>
                        <Col>
                            <Switch>
                                <Route path="/git" component={Git}/>
                                <Route path="/" component={HomePage}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    );
}

export default App;
