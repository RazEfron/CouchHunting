import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PhotosForm from './photos_form';
import { fetchPhoto, fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAllHomes } from '../../util/homes_api_util';


const mSTP = (state, ownProps) => {

    return {
        formType: 'Home',
        formObject: ownProps.home
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        fetchAllHomes: () => dispatch(fetchAllHomes)
    }
}

export default connect(
    mSTP,
    mDTP
)(PhotosForm)