import { connect } from 'react-redux';
import PhotosPreview from './photos_preview';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { deletePhoto } from '../../actions/photos_actions';
import { fetchAllProfiles, fetchProfile } from '../../actions/profiles_actions'
import { updatePhoto } from '../../actions/photos_actions';
import { fetchHome } from '../../actions/homes_actions';

const mSTP = (state, ownProps) => {
       
    return {
        photos: state.entities.photos,
        sessionId: state.session.id,
        profile_user_id: state.entities.profiles[[state.session.profile_id]].user_id
    }
}

const mDTP = (dispatch) => {
        
    return {
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
        fetchAllProfiles: () => dispatch(fetchAllProfiles),
        updatePhoto: (photo) => dispatch(updatePhoto(photo)),
        fetchHome: (homeId) => dispatch(fetchHome(homeId)),
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    }
}

export default connect(
    mSTP,
    mDTP
)(PhotosPreview)