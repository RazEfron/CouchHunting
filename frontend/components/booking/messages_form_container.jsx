import MessageForm from './message_form';
import { connect } from 'react-redux';
import { createMessage } from '../../actions/messages_actions';
import { fetchConversation } from '../../actions/conversation_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchSearchResults } from '../../actions/profiles_actions';


const mapStateToProps = (state) => {

    return {
        currentProfileId: state.session.profile_id,
    };
};

const mapDispatchToProps = dispatch => {

    return {
        createMessage: (message) => dispatch(createMessage(message)),
        fetchConversation: (conversationId, conversation) => dispatch(fetchConversation(conversationId, conversation)),
        closeModal: () => dispatch(closeModal()),
        fetchSearchResults: (location, idsArray) => dispatch(fetchSearchResults(location, idsArray)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
