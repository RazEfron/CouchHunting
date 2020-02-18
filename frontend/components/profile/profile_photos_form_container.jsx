import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PhotosForm from './photos_form';


const mSTP = (state, ownProps) => {

    return {
        formType: 'profile',
        formObject: ownProps.profile

    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    mSTP,
    mDTP
)(PhotosForm)