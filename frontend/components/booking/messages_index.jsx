import React from 'react';
import { withRouter } from 'react-router';
import ProfilePreview from "../profile/profile_preview";


class MessagesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.createMessages = this.createMessages.bind(this);
    }

    componentDidMount() {
        debugger
        const { fetchAllMessages, fetchConversation, profiles, fetchSearchResults, fetchAllPhotos, match, currentProfileId } = this.props;
        fetchAllMessages(match.params.conversationId, "none")
            .then(messages => fetchConversation(messages.messages[Object.keys(messages.messages)[0]].conversation_id))
            .then((conversation) => {
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

    }

    render() {
        debugger
        const { profiles, currentProfileId, conversation, photos } = this.props;
        let profile = profiles[currentProfileId] ? profiles[conversation.author_id === currentProfileId ? conversation.receiver_id : conversation.author_id] : undefined;
        debugger
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
                    {this.createMessages()}
                </ul>
            </div>
            )
    }
}

export default withRouter(MessagesIndex)