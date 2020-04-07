import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchProfile, updateProfile, fetchSearchResults } from '../../actions/profiles_actions';
import { fetchPhoto } from '../../actions/photos_actions';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllConversations } from '../../actions/conversation_actions';
import { fetchAllMessages } from '../../actions/messages_actions';
import { fetchUserBookings } from '../../actions/bookings_actions';

const mapStateToProps = (state) => {
    
    return {
        profileId: state.session.profile_id,
        profiles: state.entities.profiles,
        profile: state.entities.profiles[state.session.profile_id] ? state.entities.profiles[state.session.profile_id] : {},
        currentLocation: state.entities.locations && state.entities.profiles[state.session.profile_id] ? state.entities.locations[state.entities.profiles[state.session.profile_id].location_id] : {},
        bookings: state.entities.bookings

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        updateProfile: (profile) => dispatch(updateProfile(profile)),
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchAllConversations: (profileId) => dispatch(fetchAllConversations(profileId)),
        fetchAllMessages: (conversation, first) => dispatch(fetchAllMessages({ conversation, first })),
        fetchUserBookings: (profileId) => dispatch(fetchUserBookings(profileId)),
        fetchSearchResults: (locationId, search) => dispatch(fetchSearchResults(locationId, search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
