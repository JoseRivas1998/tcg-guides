import React from 'react';
import {Switch, Route} from 'react-router';

import GitBasics from './gitBasics/GitBasics';
import * as config from '../../config';

const git = (props) => {
    document.title = config.PAGE_TITLE;
    return (
        <Switch>
            <Route path="/git/basics" component={GitBasics}/>
        </Switch>
    );
};

export default git;
