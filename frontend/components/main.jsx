import React from 'react'; 
// import Signup from './auth/signup'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Dashboard from './dashboard/dashboard_container';
import Signup from './auth/signup_container';
import newProfileForm from './profile/new_profile_form_container';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <ProtectedRoute exact path="/" component={Dashboard} />
                <ProtectedRoute exact path="/profile/new" component={newProfileForm} />
                <AuthRoute path="/signup" component={Signup} />
            </div>
        )
    }
}

export default Main;