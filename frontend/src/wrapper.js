import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './lifons_components/App';
import Login_Registration from './marwins_components/App';

import App from './App';

const wrapper = (props) => {
    return(
        <Fragment>
            <Route path="/landingpage" component={LandingPage} />
            <Route path="/reg&login" component={Login_Registration} /> 
            <Route path="/assesmentTasks" exact component={App} />
        </Fragment>
    );
}

export default wrapper;