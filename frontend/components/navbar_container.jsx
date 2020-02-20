import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state) => {
    //  
    return {
       currentProfileId: state.session.profile_id
    };
};

const mapDispatchToProps = dispatch => {
    //  
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);