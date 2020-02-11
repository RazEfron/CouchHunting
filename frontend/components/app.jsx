import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Navbar from './navber'
import Main from './main'
import Footer from './footer'
import Signup from './auth/signup_container'
import Dashboard from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Navbar/>
        <Main/>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <AuthRoute path="/signup" component={Signup} />
        <Footer/>
    </div>
);

export default App;