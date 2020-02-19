import { connect } from 'react-redux';
import PhotosPreview from './photos_preview';
import { fetchAllPhotos } from '../../actions/photos_actions';


const mSTP = (state, ownProps) => {
       
    return {
        photos: state.entities.photos,
        sessionId: state.session.id,
        profile_user_id: state.entities.profiles[[state.session.profile_id]].user_id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchAllPhotos: dispatch(fetchAllPhotos()),
    }
}

export default connect(
    mSTP,
    mDTP
)(PhotosPreview)