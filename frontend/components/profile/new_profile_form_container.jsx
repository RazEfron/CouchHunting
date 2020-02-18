import { connect } from 'react-redux';
import { createProfile } from '../../actions/profiles_actions';
import NewProfileForm from './new_profile_form';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllProfiles } from '../../actions/profiles_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.profiles.responseJSON,
        currentUserId: state.session.id,
        locations: Object.values(state.entities.locations)
        // profiles: Object.values(state.entities.profiles)
    };
};

const mapDispatchToProps = dispatch => {
    //  
    return {
        createProfile: (profile) => dispatch(createProfile(profile)),
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchAllProfiles: () => dispatch(fetchAllProfiles())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProfileForm);
