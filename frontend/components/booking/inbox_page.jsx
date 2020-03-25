import React from 'react';
import { withRouter } from 'react-router';


class Inbox extends React.Component {
    constructor(props) {
        super(props)
        this.handleConversationClick = this.handleConversationClick.bind(this);
        this.handleMessageClick = this.handleMessageClick.bind(this);
    }

    componentDidMount() {

    }

    handleConversationClick() {
        this.props.createConversation({ author_id: parseInt(this.props.author_id), receiver_id: parseInt(this.props.match.params.profileId) })
    }

    handleMessageClick() {
        debugger
        this.props.createMessage({ body: "blablabla3", conversation_id: 3, profile_id: 189 })
    }

    render() {
        debugger
        return (
            <div className="inbox-page">
                <button onClick={this.handleConversationClick}>Create Conversation</button>
                <button onClick={this.handleMessageClick}>Create Message</button>
            </div>
        )
    }
}

export default withRouter(Inbox)