import { connect } from 'react-redux';
import { logout, fetchAllUsers, receiveCurrentUser } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
    debugger
    return {
        user: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
