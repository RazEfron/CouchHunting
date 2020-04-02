import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createMessage } from '../../actions/messages_actions';
import { fetchConversation } from '../../actions/conversation_actions';
import { createBooking } from '../../actions/bookings_actions';
import { fetchSearchResults } from '../../actions/profiles_actions';


const mapStateToProps = (state) => {

    return {
        currentProfileId: state.session.profile_id,
    };
};

const mapDispatchToProps = dispatch => {

    return {
        closeModal: () => dispatch(closeModal()),
        createMessage: (message) => dispatch(createMessage(message)),
        fetchConversation: (conversationId, conversation) => dispatch(fetchConversation(conversationId, conversation)),
        createBooking: (booking) => dispatch(createBooking(booking)),
        fetchSearchResults: (location, idsArray) => dispatch(fetchSearchResults(location, idsArray)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
