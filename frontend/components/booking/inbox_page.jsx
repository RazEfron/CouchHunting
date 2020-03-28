import React from 'react';
import { withRouter } from 'react-router';


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
                    conversationIds = conversations.conversations.map(conversation => conversation.author_id === this.props.currentProfileId ? conversation.receiver_id : conversation.author_id)
                    messagesIds = conversations.conversations.map(conversation => conversation.messageId)
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
        if (this.props.conversations !== undefined) {
            return(
                this.props.conversations.forEach(convo => {
                    <ConversationItem
                        conversation={convo}
                        message={this.props.messages}
                    />
                })
            )
        }
        return ""
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
                    {this.createConversationsItems}
                </ul>
            </div>
        )
    }
}

export default withRouter(Inbox)