import React from 'react';
import { withRouter } from 'react-router';
import ConversationItem from './conversation_item';


class Inbox extends React.Component {
    constructor(props) {
        super(props)
        this.createConversationsItems = this.createConversationsItems.bind(this);
    }

    componentDidMount() {
        
        let conversationIds
        let messagesIds
        if (this.props.conversations.length === 0) {
            this.props.fetchAllConversations(this.props.currentProfileId)
                .then(() => {
                    
                    conversationIds = this.props.conversations.map(conversation => conversation.author_id === this.props.currentProfileId ? conversation.receiver_id : conversation.author_id)
                    messagesIds = this.props.conversations.map(conversation => conversation.messageId)
                    this.props.fetchAllMessages("none", messagesIds)
                })
                .then(() => {
                    
                    this.props.fetchSearchResults("all", conversationIds)})
        } else {
            
            conversationIds = this.props.conversations.map(conversation => conversation.author_id === this.props.currentProfileId ? conversation.receiver_id : conversation.author_id)
            messagesIds = this.props.conversations.map(conversation => conversation.messageId)
            this.props.fetchSearchResults("all", conversationIds)
            this.props.fetchAllMessages("none", messagesIds)
        }
        
        this.props.fetchAllPhotos()
    }

    createConversationsItems() {
        const { conversations, currentProfileId, profiles, messages, photos, locations, fetchSearchResults, fetchAllMessages, fetchAllBookings } = this.props;
        let array = []
        if (conversations.length > 0) {
            
            let newConvearsations
            if (messages[conversations[0].messageId] !== undefined) {
                debugger
                newConvearsations = conversations.slice().sort((a, b) => Date.parse(messages[b.messageId].created_at) - Date.parse(messages[a.messageId].created_at)) 
            } else {
                newConvearsations = conversations.slice();
            }
            
            newConvearsations.forEach(convo => {
                
                let profileId = convo.author_id === currentProfileId ? convo.receiver_id : convo.author_id;
                let profile = profiles[profileId];
                if (profile != undefined) {
                    array.push(<ConversationItem
                        key={convo.id} 
                        conversation={convo}
                        message={messages[convo.messageId]}
                        profile={profile}
                        photo={photos[profile.profile_photo_id] ? photos[profile.profile_photo_id] : window.defaultPic}
                        currentLocation={locations[profile.location_id]}
                        fetchSearchResults={fetchSearchResults}
                        fetchAllMessages={fetchAllMessages}
                        fetchAllBookings={fetchAllBookings}
                        />)
                    }
                })
        }
        return array
    }

    render() {
        
        return (
            <div className="inbox-page">
                <div className="inbox-title">
                    <a>
                        <h1>
                            Inbox
                        </h1>
                    </a>
                </div>
                <ul className="conversations-index">
                    {this.createConversationsItems()}
                </ul>
            </div>
        )
    }
}

export default withRouter(Inbox)