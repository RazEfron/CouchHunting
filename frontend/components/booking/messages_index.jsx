import React from 'react';
import { withRouter } from 'react-router';
import ProfilePreview from "../profile/profile_preview";


class MessagesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.createMessages = this.createMessages.bind(this);
        this.daysPassed = this.daysPassed.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = { body: "" }
    }

    componentDidMount() {
        
        const { fetchAllMessages, fetchConversation, profiles, fetchSearchResults, fetchAllPhotos, match, currentProfileId } = this.props;
        fetchAllMessages(match.params.conversationId, "none")
            .then(messages => { 
                debugger
                return fetchConversation(messages.messages[Object.keys(messages.messages)[0]].conversation_id, "none")})
                    .then(conversation => {
                        debugger
                        if (profiles[currentProfileId] === undefined) {
                            const { author_id, receiver_id } = conversation.conversation;
                            fetchSearchResults("all", [author_id, receiver_id])
                                .then(() => fetchAllPhotos())
                        }
                    })
    }

    handleChange(stateSlice) {
        this.setState(Object.assign({}, stateSlice));
        this.props.updateProfile(stateSlice.profile);
    }

    createMessages() {
        debugger
        const { profiles, photos } = this.props;
        return this.props.messages.map(message => {
            debugger
            let profilePicId = profiles[message.profile_id].profile_photo_id;
            let photo = photos[profilePicId];
            return <li 
                    key={message.id}
                    className="message-item"
                    >
                        <div>
                            <img src={photo ? photo.photoUrl : window.defaultPic} />
                        </div>
                        <div className="message-item-body-container">
                            <span>
                                {message.body}
                            </span>
                            <span>
                                {this.daysPassed(message)}
                            </span>
                        </div>
                    </li>
        })
    }

    daysPassed(message) {
        let now = new Date;
        let createdAt = new Date(message.created_at);
        let timeApart = now.getTime() - createdAt.getTime();
        let daysApart = timeApart / (1000 * 3600 * 24);
        if (daysApart < 1) {
            return "Today"
        }   else if (daysApart > 30) {
            return `About ${Math.floor(daysApart / 30)} months ago`
        } else if (daysApart > 365) {
            return ` About ${Math.floor(daysApart / 365)} years ago`
        } else {
            return `${Math.floor(daysApart)} days ago`
        }
    }

    clickHandler() {
        
        let body = this.state.body;
        let conversation_id = this.props.conversation.id;
        let profile_id = this.props.currentProfileId;
        this.props.createMessage({ body, conversation_id, profile_id})
    }

    render() {
        debugger
        const { profiles, currentProfileId, conversation, photos } = this.props;
        let profile = profiles[currentProfileId] ? profiles[conversation.author_id === currentProfileId ? conversation.receiver_id : conversation.author_id] : undefined;
        
        let photo = profile === undefined ? undefined : photos[profile.profile_photo_id]
        return(
            <div className="messages-index-container">
            {profile === undefined ? "" : (
                <ProfilePreview
                profile={profile}
                currentLocation={this.props.locations[profile.location_id]}
                loggedInId={this.props.match.params.profileId}
                handleChange={this.handleChange}
                profilePic={photo}
                />
                )}
                <ul className="messages-index">
                    <div>
                        <form>
                            <textarea placeholder="Write a message.." onChange={(e) => { 
                                
                                return this.setState({ body: e.target.value})}}></textarea>
                            <button onClick={this.clickHandler}>Send</button>
                        </form>
                    </div>
                    {this.props.photos[Object.keys(this.props.photos)[0]]? (this.createMessages()
                    ) : ("")}

                </ul>
            </div>
            )
    }
}

export default withRouter(MessagesIndex)