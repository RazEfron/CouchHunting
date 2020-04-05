import MessagesIndex from './messages_index';
import { connect } from 'react-redux';
import { updateProfile, fetchSearchResults } from '../../actions/profiles_actions';
import { fetchAllMessages, createMessage } from '../../actions/messages_actions';
import { fetchConversation, fetchAllConversations } from '../../actions/conversation_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAllBookings, updateBooking } from '../../actions/bookings_actions';


const mapStateToProps = (state, ownProps) => {
    
    return {
        profiles: state.entities.profiles,
        locations: state.entities.locations,
        conversation: state.entities.conversations,
        currentProfileId: state.session.profile_id,
        photos: state.entities.photos,
        messages: Object.values(state.entities.messages).reverse(),
        bookings: state.entities.bookings,
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        updateProfile: (profileId) => dispatch(updateProfile(profileId)),
        fetchAllMessages: (conversation, first) => dispatch(fetchAllMessages({conversation, first})),
        fetchConversation: (conversationId, conversation) => dispatch(fetchConversation(conversationId, conversation)),
        fetchSearchResults: (location, idsArray) => dispatch(fetchSearchResults(location, idsArray)),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        createMessage: (message) => dispatch(createMessage(message)),
        fetchAllBookings: (conversationId) => dispatch(fetchAllBookings(conversationId)),
        updateBooking: (booking) => dispatch(updateBooking(booking)),
        fetchAllConversations: (conversationId) => dispatch(fetchAllConversations(conversationId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex);
