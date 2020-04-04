import React from 'react';
import { withRouter } from 'react-router';


class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: "" }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        
        const { currentProfileId, match, createMessage, fetchConversation, fetchSearchResults } = this.props;
        fetchSearchResults("all", [match.params.profileId, currentProfileId])
            .then(() =>fetchConversation("none", { author_id: currentProfileId, receiver_id: match.params.profileId }))
            .then(conversation => createMessage({ body: this.state.body, conversation_id: conversation.conversation.id, profile_id: currentProfileId }))
            .then(message => this.props.history.replace(`/conversations/${message.message.conversation_id}`))
    }

    componentWillUnmount() {
        this.props.closeModal()
    }

    render() {
        
        return (
            <div className="message-form-container">
                <span className="close" onClick={this.props.closeModal}>&times;</span>
                <form>
                    <textarea placeholder="Write a message.." onChange={(e) => {
                        
                        return this.setState({ body: e.target.value })
                    }} required></textarea>
                    <button onClick={this.clickHandler}>Send</button>
                </form>
            </div>
        )
    }
}


export default withRouter(MessageForm);