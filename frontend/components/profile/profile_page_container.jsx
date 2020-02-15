import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../actions/profiles_actions';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchAllHomes, updateHome } from '../../actions/homes_actions';
import ProfilePage from './profile_page';


const mSTP = (state, ownProps) => {
    debugger
    return {
        profile: state.entities.profiles[ownProps.match.params.profileId] ? state.entities.profiles[ownProps.match.params.profileId] : 
            { user_id: '', location_id: '', hosting_status: '', date_of_birth: '', gender: '', occupation: '', about_me: '', profile_pic_url: '', spoken_languages: '', interests: '' },
        user: state.entities.users[state.session.id] ? state.entities.users[state.session.id]
        : { id: '', first_name: '', last_name: '', email: '', profile_id: '', profile: '', location_id: '', location: '' },
        currentLocation: state.entities.locations[state.session.location_id] ? state.entities.locations[state.session.location_id] : 
            { id: '', city: '', country: '' },
        home: state.entities.users[state.session.id].home_id ? state.entities.homes[state.entities.users[state.session.id].home_id] :
            { id: '', city: '', country: '' },
        loggedInId: state.session.id,
        locations: state.entities.locations ? Object.values(state.entities.locations) : []
    }
}

const mDTP = (dispatch) => {
    return {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllHomes: () => dispatch(fetchAllHomes()),
        updateProfile: (profile) => dispatch(updateProfile(profile)),
        updateHome: (home) => dispatch(updateHome(home))

    }
}

export default connect(
    mSTP,
    mDTP
)(ProfilePage)