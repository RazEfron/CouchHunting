import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PhotosForm from './photos_form';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAllHomes } from '../../actions/homes_actions';


const mSTP = (state, ownProps) => {

    return {
        formType: 'Home',
        formObject: ownProps.home
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        fetchAllEntities: () => dispatch(fetchAllHomes())
    }
}

export default connect(
    mSTP,
    mDTP
)(PhotosForm)