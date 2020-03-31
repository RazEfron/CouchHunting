import React from 'react';
import { withRouter } from 'react-router';
import ConversationItem from './conversation_item';


class Inbox extends React.Component {
    constructor(props) {
        super(props)
        // this.handleConversationClick = this.handleConversationClick.bind(this);
        // this.handleMessageClick = this.handleMessageClick.bind(this);
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
        debugger
        let array = []
        if (this.props.conversations.length > 0) {
            this.props.conversations.forEach(convo => {
                
                let profileId = convo.author_id === this.props.currentProfileId ? convo.receiver_id : convo.author_id;
                let profile = this.props.profiles[profileId];
                if (profile != undefined) {
                    array.push(<ConversationItem
                        key={convo.id} 
                        conversation={convo}
                        message={this.props.messages[convo.messageId]}
                        profile={profile}
                        photo={this.props.photos[profile.profile_photo_id] ? this.props.photos[profile.profile_photo_id] : window.defaultPic}
                        currentLocation={this.props.locations[profile.location_id]}
                        fetchSearchResults={this.props.fetchSearchResults}
                        />)
                    }
                })
        }
        return array
    }


    // handleConversationClick() {
    //     this.props.createConversation({ author_id: parseInt(this.props.author_id), receiver_id: parseInt(this.props.match.params.profileId) })
    // }

    // handleMessageClick() {
    //     
    //     this.props.createMessage({ body: "blablabla3", conversation_id: 3, profile_id: 189 })
    // }

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