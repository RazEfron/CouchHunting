import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../actions/session_actions';
import { fetchProfile } from '../actions/profiles_actions';

const mapStateToProps = (state) => { 
    return {
       currentProfileId: state.session.profile_id
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);