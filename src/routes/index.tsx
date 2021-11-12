import React from "react";

import { Route, Switch } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import RegisterPage from '../pages/RegisterPage';

const Routes: React.FC = () => (
    <>
        <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/registerPage" exact component={RegisterPage} />
        </Switch>
    </>
)

export default Routes;
