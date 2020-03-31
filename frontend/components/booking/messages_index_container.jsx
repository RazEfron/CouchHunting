import MessagesIndex from './messages_index';
import { connect } from 'react-redux';
import { updateProfile, fetchSearchResults } from '../../actions/profiles_actions';
import { fetchAllMessages } from '../../actions/messages_actions';
import { fetchConversation } from '../../actions/conversation_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';


const mapStateToProps = (state, ownProps) => {
    
    return {
        profiles: state.entities.profiles,
        locations: state.entities.locations,
        conversation: state.entities.conversations,
        currentProfileId: state.session.profile_id,
        photos: state.entities.photos,
        messages: Object.values(state.entities.messages).reverse()
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        updateProfile: (profileId) => dispatch(updateProfile(profileId)),
        fetchAllMessages: (conversation, first) => dispatch(fetchAllMessages({conversation, first})),
        fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
        fetchSearchResults: (location, idsArray) => dispatch(fetchSearchResults(location, idsArray)),
        fetchAllPhotos: () => dispatch(fetchAllPhotos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex);
