import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import QaComponent from './components/QaComponent/qaComponent';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" component={QaComponent} />
        </Switch>
    );
};

export default Routes;