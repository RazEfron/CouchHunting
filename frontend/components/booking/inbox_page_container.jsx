import Inbox from './inbox_page';
import { createConversation, fetchAllConversations } from '../../actions/conversation_actions';
import { connect } from 'react-redux';
import { createMessage, fetchAllMessages } from '../../actions/messages_actions';
import { fetchSearchResults } from '../../actions/profiles_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';


const mapStateToProps = (state) => {
    
    return {
        currentProfileId: state.session.profile_id,
        conversations: state.entities.conversations ? state.entities.conversations : [],
        profiles: state.entities.profiles,
        photos: state.entities.photos,
        messages: state.entities.messages,
        locations: state.entities.locations
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        createConversation: (conversation) => dispatch(createConversation(conversation)),
        fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
        fetchAllConversations: (profileId) => dispatch(fetchAllConversations(profileId)),
        createMessage: (message) => dispatch(createMessage(message)),
        fetchSearchResults: (location, idsArray) => dispatch(fetchSearchResults(location, idsArray)),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        fetchAllMessages: (conversation, first) => dispatch(fetchAllMessages({conversation, first}))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
