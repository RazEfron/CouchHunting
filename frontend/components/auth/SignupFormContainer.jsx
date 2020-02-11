import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signupForm';

const mapStateToProps = ({ errors }) => {
    debugger
    return {
        errors: errors.users.responseJSON
        // navLink: <Link to="/signup">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
