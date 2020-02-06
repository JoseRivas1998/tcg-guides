import React from 'react';
import {Switch, Route} from 'react-router';

import GitBasics from './gitBasics/GitBasics';

const git = (props) => {
    return (
        <Switch>
            <Route path="/git/basics" component={GitBasics}/>
        </Switch>
    );
};

export default git;
