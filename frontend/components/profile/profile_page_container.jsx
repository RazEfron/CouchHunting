import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/profiles_actions';
import ProfilePage from './profile_page';

const mSTP = (state) => {
    return {
        profile
    }
}

const mDTP = (dispatch) => {
    return {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    }
}

export default connect(
    mSTP,
    mDTP
)(ProfilePage)