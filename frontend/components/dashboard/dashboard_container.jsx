import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session.responseJSON
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(null, mapDispatchToProps)(Dashboard);
