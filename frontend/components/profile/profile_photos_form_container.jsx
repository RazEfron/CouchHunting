import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PhotosForm from './photos_form';
import { fetchAllProfiles } from '../../actions/profiles_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';


const mSTP = (state, ownProps) => {

    return {
        formType: 'Profile',
        formObject: ownProps.profile

    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        fetchAllEntities: () => dispatch(fetchAllProfiles())

    }
}

export default connect(
    mSTP,
    mDTP
)(PhotosForm)