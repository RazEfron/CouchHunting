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
        debugger
        let conversationIds
        let messagesIds
        if (this.props.conversations.length === 0) {
            this.props.fetchAllConversations(this.props.currentProfileId)
                .then(conversations => {
                    debugger
                    conversationIds = this.props.conversations.map(conversation => conversation.author_id === this.props.currentProfileId ? conversation.receiver_id : conversation.author_id)
                    messagesIds = this.props.conversations.map(conversation => conversation.messageId)
                })
                .then(() => {
                    debugger
                    this.props.fetchSearchResults("all", conversationIds)})
        } else {
            debugger
            conversationIds = this.props.conversations.map(conversation => conversation.author_id === this.props.currentProfileId ? conversation.receiver_id : conversation.author_id)
            messagesIds = this.props.conversations.map(conversation => conversation.messageId)
            this.props.fetchSearchResults("all", conversationIds)
        }
        this.props.fetchAllMessages("none", messagesIds)
        this.props.fetchAllPhotos()
    }

    createConversationsItems() {
        debugger
        let array = []
        if (this.props.conversations.length > 0) {
            this.props.conversations.forEach(convo => {
                debugger
                let profile = this.props.profiles[convo.author_id === this.props.currentProfileId ? convo.receiver_id : convo.author_id]
                    array.push(<ConversationItem
                        conversation={convo}
                        message={this.props.messages[convo.messageId]}
                        profile={profile}
                        photo={this.props.photos[profile.profile_photo_id] ? this.props.photos[profile.profile_photo_id] : window.defaultPic}
                        location={this.props.locations[profile.location_id]}
                    />)
                })
        }
        return array
    }


    // handleConversationClick() {
    //     this.props.createConversation({ author_id: parseInt(this.props.author_id), receiver_id: parseInt(this.props.match.params.profileId) })
    // }

    // handleMessageClick() {
    //     debugger
    //     this.props.createMessage({ body: "blablabla3", conversation_id: 3, profile_id: 189 })
    // }

    render() {
        debugger
        return (
            <div className="profile-page">
                <ul>
                    {/* {this.createConversationsItems()} */}
                </ul>
            </div>
        )
    }
}

export default withRouter(Inbox)