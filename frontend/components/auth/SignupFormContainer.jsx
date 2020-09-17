import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signupForm';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.users.responseJSON
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
