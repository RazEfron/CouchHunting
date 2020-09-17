import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../actions/profiles_actions';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchAllHomes, updateHome, fetchHome } from '../../actions/homes_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { openModal } from '../../actions/modal_actions';
import ProfilePage from './profile_page';
import { createConversation, fetchConversation } from '../../actions/conversation_actions';


const mSTP = (state, ownProps) => {
    
    return {
        profile: state.entities.profiles[ownProps.match.params.profileId] ? state.entities.profiles[ownProps.match.params.profileId] : {},
        allPhotos: state.entities.photos && state.entities.profiles[ownProps.match.params.profileId] ? state.entities.photos : {},

        loggedInId: state.session.profile_id,
        locations: state.entities.locations ? Object.values(state.entities.locations) : [],
        memberSince: state.entities.profiles[ownProps.match.params.profileId] ? state.entities.profiles[ownProps.match.params.profileId].created_at : "",

        currentLocation: state.entities.locations && state.entities.profiles[ownProps.match.params.profileId] ? state.entities.locations[state.entities.profiles[ownProps.match.params.profileId].location_id] : {},
        home: state.entities.profiles[ownProps.match.params.profileId] && Object.keys(state.entities.homes).length > 0 ? state.entities.homes[state.entities.profiles[ownProps.match.params.profileId].home_id] : {}

    }
}

const mDTP = (dispatch) => {
    return {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchHome: (homeId) => dispatch(fetchHome(homeId)),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),

        updateProfile: (profile) => dispatch(updateProfile(profile)),
        updateHome: (home) => dispatch(updateHome(home)),

        openModal: (formType) => dispatch(openModal(formType)),

        createConversation: (conversation) => dispatch(createConversation(conversation)),
        fetchConversation: (conversationId, conversation) => dispatch(fetchConversation(conversationId, conversation))
    }
}

export default connect(
    mSTP,
    mDTP
)(ProfilePage)