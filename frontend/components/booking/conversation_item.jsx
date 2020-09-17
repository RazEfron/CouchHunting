import React from 'react';
import { withRouter } from 'react-router';


class ConversationItem extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        let conversationId = e.currentTarget.value
        this.props.fetchSearchResults("all", [this.props.match.params.profileId, this.props.profile.id])
        .then(() => this.props.fetchAllMessages(conversationId, "none"))
        .then(() => this.props.fetchAllBookings(conversationId))
        .then(() => this.props.history.replace(`/conversations/${this.props.conversation.id}`))
    }

    render() {
        
        if (this.props.message) {
            return (
                <li 
                    value={this.props.conversation.id} 
                    className="conversation-item" 
                    onClick={(e) => this.clickHandler(e)}
                >
                    <div id="left-conversation-item">
                        {this.props.message.status === "unread" && this.props.message.profile_id !== parseInt(this.props.match.params.profileId, 10) ? (
                            <span className="unread-dote"></span>
                        ) : (
                                ""
                            )}
                    </div>
                    <div>
                        {/* image name and location */}
                        <img src={this.props.photo.photoUrl}/>
                        <div>
                            <h1>
                                {this.props.profile.username}
                            </h1>
                            <h2>
                                <a>{`${this.props.currentLocation.city},${this.props.currentLocation.country}`}</a>
                            </h2>
                        </div>
                    </div>
                        {/* who sent message, last message */}
                        {this.props.message.profile_id === parseInt(this.props.match.params.profileId, 10) ? (
                            <div id="conversation-item-right-display">
                                <h3>
                                    You sent A message to {this.props.profile.username}
                                </h3>
                                <p className="my-message">
                                    <span>
                                        {this.props.message.body}
                                    </span>
                                </p>
                            </div>
                        ) : (
                            <div id="conversation-item-right-display">
                                <h3>
                                    {this.props.profile.username} sent you a message
                                </h3>
                                <p className="not-my-message">
                                    <span>
                                        {this.props.message.body}
                                    </span>
                                </p>
                            </div>
                        )}
                </li>
            )
        }
        return ""
    }
}

export default withRouter(ConversationItem)