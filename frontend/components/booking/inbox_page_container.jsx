import Inbox from './inbox_page';
import { createConversation } from '../../actions/conversation_actions';
import { connect } from 'react-redux';
import { createMessage } from '../../actions/messages_actions';


const mapStateToProps = (state) => {
    debugger
    return {
        author_id: state.session.profile_id
    };
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        createConversation: (conversation) => dispatch(createConversation(conversation)),
        fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
        fetchAllConversations: () => dispatch(fetchAllConversations()),
        createMessage: (message) => dispatch(createMessage(message))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
