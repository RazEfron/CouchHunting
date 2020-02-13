import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, hasProfile }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>{
            return loggedIn && !hasProfile ? <Redirect to="/profile/new" /> : <Component {...props} /> 
        }
        }
    />
);

const DoubleAuth = ({ component: Component, path, loggedIn, exact, hasProfile }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn && hasProfile ? <Redirect to="/" /> : <Component {...props} />
        }
    />
);



const mapStateToProps = state => {
    return { 
        loggedIn: Boolean(state.session.id),
        currentUserId: state.session.id,
        hasProfile: Object.values(state.entities.profiles).map(profile => profile.user_id).indexOf(state.session.id) !== -1
     };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const DoubleAuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(DoubleAuth)
);

const Protected = ({ component: Component, path, loggedIn, exact, hasProfile }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn && !hasProfile ? <Component {...props} /> : <Redirect to="/profile/new" />
        }
    />
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
);

const DoubleProtected = ({ component: Component, path, loggedIn, exact, hasProfile }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn && !hasProfile ? <Component {...props} /> : loggedIn && hasProfile ? <Redirect to="/" /> : <Redirect to="/signup" />
        }
    />
);

export const DoubleProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(DoubleProtected)
);

