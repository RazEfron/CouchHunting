import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PhotosForm from './photos_form';
import { fetchPhoto } from '../../actions/photos_actions';


const mSTP = (state, ownProps) => {

    return {
        formType: 'Home',
        formObject: ownProps.home
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId))
    }
}

export default connect(
    mSTP,
    mDTP
)(PhotosForm)