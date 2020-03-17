import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../actions/profiles_actions';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchAllHomes, updateHome } from '../../actions/homes_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { openModal } from '../../actions/modal_actions';
import ProfilePage from './profile_page';


const mSTP = (state, ownProps) => {
    debugger
    return {
        profile: state.entities.profiles ? state.entities.profiles : {},
        allPhotos: state.entities.photos && state.entities.profiles[state.session.profile_id] ? state.entities.photos : {},

        loggedInId: state.session.profile_id,
        currentUserProfileId: state.entities.users[state.session.id].profile_id ? state.entities.users[state.session.id].profile_id : ownProps.match.params.profileId,
        locations: state.entities.locations ? Object.values(state.entities.locations) : [],
        memberSince: state.entities.profiles.id ? state.entities.profiles.created_at : "",

        currentLocation: state.entities.locations[state.session.location_id] && state.entities.profiles[ownProps.match.params.profileId] ? state.entities.locations[state.entities.profiles[ownProps.match.params.profileId].location_id] : {},
        home: state.entities.profiles ? state.entities.homes[state.entities.profiles.home_id] :
            {},

    }
}

const mDTP = (dispatch) => {
    return {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllHomes: () => dispatch(fetchAllHomes()),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),

        updateProfile: (profile) => dispatch(updateProfile(profile)),
        updateHome: (home) => dispatch(updateHome(home)),

        openModal: (formType) => dispatch(openModal(formType))

    }
}

export default connect(
    mSTP,
    mDTP
)(ProfilePage)