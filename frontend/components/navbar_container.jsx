import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../actions/session_actions';
import { fetchProfile } from '../actions/profiles_actions';
import { fetchAllConversations } from '../actions/conversation_actions';
import { fetchAllMessages } from '../actions/messages_actions';

const mapStateToProps = (state) => { 
    return {
       currentProfileId: state.session.profile_id,
       messages: state.entities.messages
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        fetchAllConversations: (profileId) => dispatch(fetchAllConversations(profileId)),
        fetchAllMessages: (conversation, first) => dispatch(fetchAllMessages({ conversation, first })),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);