import React from 'react'; 
// import Signup from './auth/signup'
import { AuthRoute, ProtectedRoute, DoubleProtectedRoute } from '../util/route_util';
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
import ProfilePage from './profile/profile_page_container'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <DoubleProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/profile/new" component={newProfileForm} />
                <AuthRoute exact path="/" component={Signup} />
                <DoubleProtectedRoute exact path="/profiles/:profileId" component={ProfilePage} />
                <DoubleProtectedRoute exact path="/profiles/:profileId/edit" component={ProfilePage}/>
            </div>
        )
    }
}

export default Main;