import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import CreateEventWizard from './Components/CreateEventWizard/CreateEventWizard';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/new-event" component={CreateEventWizard} />
    </Switch>
)