import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {

    return {
        currentProfileId: state.session.profile_id,
    };
};

const mapDispatchToProps = dispatch => {

    return {
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
