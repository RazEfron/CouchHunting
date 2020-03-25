import Inbox from './inbox_page';
import { createConversation } from '../../actions/conversation_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    debugger
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createConversation: (conversation) => dispatch(createConversation(conversation)),
        fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
        fetchAllConversations: () => dispatch(fetchAllConversations()),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
