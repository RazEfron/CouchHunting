import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, hasProfile }) => {
    debugger
    return (<Route
        path={path}
        exact={exact}
        render={props =>{
            return loggedIn && !hasProfile ? <Redirect to="/profile/new" /> : <Component {...props} /> 
        }
        }
    />)
    };

const mapStateToProps = state => {
    debugger
    return { 
        loggedIn: Boolean(state.session.id),
        currentUserId: state.session.id,
        hasProfile: Boolean(state.session.profile_id !== "null")
     };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

const Protected = ({ component: Component, path, loggedIn, exact, hasProfile }) => {
    debugger
    return (<Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn && !hasProfile ? <Component {...props} /> : <Redirect to="/dashboard" />
        }
    />)
    };

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
);

const DoubleProtected = ({ component: Component, path, loggedIn, exact, hasProfile }) => {
    debugger
    return (<Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Redirect to="/" /> : loggedIn && hasProfile ? <Component {...props} /> : <Redirect to="/profile/new" />
        }
    />)
    };

export const DoubleProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(DoubleProtected)
);

