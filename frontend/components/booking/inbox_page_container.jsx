import Inbox from './inbox_page';
import { createConversation, fetchAllConversations } from '../../actions/conversation_actions';
import { connect } from 'react-redux';
import { createMessage, fetchAllMessages } from '../../actions/messages_actions';
import { fetchSearchResults } from '../../actions/profiles_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';


const mapStateToProps = (state) => {
    debugger
    return {
        currentProfileId: state.session.profile_id,
        conversations: state.entities.conversations ? Object.values(state.entities.conversations) : undefined
    };
};

const mapDispatchToProps = dispatch => {
    debugger
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
