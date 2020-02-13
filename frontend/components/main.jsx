import React from 'react'; 
// import Signup from './auth/signup'
import { AuthRoute, ProtectedRoute, DoubleAuthRoute, DoubleProtectedRoute } from '../util/route_util';
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
                <ProtectedRoute exact path="/" component={Dashboard} />
                <Route exact path="/profile/new" component={newProfileForm} />
                <AuthRoute path="/signup" component={Signup} />
                {/* <Route exact path="/profile/:profileId" component={ProfilePage}/> */}
            </div>
        )
    }
}

export default Main;