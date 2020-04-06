import React from 'react';
import { withRouter } from 'react-router';
import ProfilePreview from "../profile/profile_preview";


class MessagesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" }
        this.handleChange = this.handleChange.bind(this);
        this.createMessages = this.createMessages.bind(this);
        this.daysPassed = this.daysPassed.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.createBookings = this.createBookings.bind(this);
        this.handleBookingUpdate = this.handleBookingUpdate.bind(this);
    }

    componentDidMount() {
        const { fetchAllMessages, fetchConversation, profiles, fetchSearchResults, fetchAllPhotos, match, currentProfileId, fetchAllBookings } = this.props;
        fetchAllMessages(match.params.conversationId, "none")
            .then(messages => fetchConversation(messages.messages[Object.keys(messages.messages)[0]].conversation_id, "none"))
            .then(conversation => {
                    if (profiles[currentProfileId] === undefined) {
                        const { author_id, receiver_id, id } = conversation.conversation;
                        return fetchSearchResults("all", [author_id, receiver_id])
                            .then(() => fetchAllPhotos())
                            .then(() => fetchAllBookings(id))
                    }
                })
    }

    handleChange(stateSlice) {
        this.setState(Object.assign({}, stateSlice));
        this.props.updateProfile(stateSlice.profile);
    }

    createMessages() {
        
        const { profiles, photos, messages, updateMessage, currentProfileId } = this.props;
        if (messages[0].status === "unread" && messages[0].profile_id !== currentProfileId) {
            let newMessage = Object.assign({}, messages[0])
            newMessage.status = "read"
            updateMessage(newMessage)
        }
        return messages.map(message => {
            
            let profilePicId = profiles[message.profile_id] ? profiles[message.profile_id].profile_photo_id : 1;
            let photo = photos[profilePicId] ? photos[profilePicId] : { photoUrl : "none" };
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

    createBookings() {
        const { bookings, currentProfileId, profiles } = this.props
        let array = [];
        Object.values(bookings).forEach(booking => {
            if (profiles[booking.traveler_id] === undefined) {
                return
            }
            if (new Date(booking.start_date) > Date.now()) {
                switch (booking.status) {
                    case ("canceled"):
                        array.push(
                            <li key={booking.id} className="booking-display-canceled">
                            <div>
                                <p>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </p>
                            </div>
                            <div>
                                <p>
                                    {`${booking.host_id === currentProfileId ? `${profiles[booking.host_id].username}` :  "You"} Canceled`}
                                </p>
                            </div>
                        </li>
                    )
                    break;
                    case ("approved"):
                        
                        array.push(
                            <li key={booking.id} className="booking-display-canceled">
                            <div>
                                <p>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </p>
                            </div>
                            <div>
                                <p>
                                    {`${booking.host_id === currentProfileId ? "You" : `${profiles[booking.host_id].username}`} Approved`}
                                </p>
                            </div>
                        </li>
                    )
                    break;
                    case ("pending"):
                        
                        array.push(
                            <li className="booking-display-pending" key={booking.id}>
                            <div>
                                <p>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </p>
                            </div>
                                {booking.host_id === currentProfileId ? (
                                <div className="booking-display-pending-buttons">
                                    <div>
                                            {`Can you host ${profiles[booking.traveler_id].username}?`}
                                    </div>
                                    <div>
                                        <input className="booking-button" id={booking.id} type="submit" value="Approve" onClick={(e) => this.handleBookingUpdate(e)}/>
                                        <input className="booking-button" id={booking.id} type="submit" value="Decline" onClick={(e) => this.handleBookingUpdate(e)}/>
                                    </div>
                                </div>
                                ) : (
                                <div className="booking-display-pending-buttons">
                                    <div>
                                                {`Waiting for ${profiles[booking.traveler_id].username}'s reply`}
                                    </div>
                                    <div>
                                        <input className="booking-button" id={booking.id} type="submit" value="Cancel" onClick={(e) => this.handleBookingUpdate(e)}/>
                                    </div>
                                </div>
                                )}
                        </li>
                    )
                    break;
                    case ("declined"):
                        array.push(
                            <li key={booking.id} className="booking-display-canceled">
                            <div>
                                <p>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </p>
                            </div>
                            <div>
                                <p>
                                {`${booking.host_id === currentProfileId ? "You" : `${profiles[booking.host_id].username}`} Declined`}
                                </p>
                            </div>
                        </li>
                    )
                    break;
                    default:
                        break;
                    }
            }
        });
        return array;
    }

    handleBookingUpdate(e) {
        const { bookings, profiles, match, currentProfileId, createMessage, updateBooking } = this.props
        let booking = Object.assign({}, bookings[e.target.id])
        let traveler = profiles[booking.traveler_id]
        let host = profiles[booking.host_id]
        let start = new Date(booking.start_date).toString().slice(0, 10)
        let end = new Date(booking.end_date).toString().slice(0, 10)
        switch (e.target.value) {
            case "Approve":
                booking.status = "approved"
                createMessage({ 
                    body: `request approved to host ${traveler.username} ${start} -> ${end}`,
                    conversation_id: match.params.conversationId,
                    profile_id: currentProfileId
                })
                break;
            case "Decline":
                booking.status = "declined"
                createMessage({ 
                    body: `request declined to host ${traveler.username} ${start} -> ${end}`,
                    conversation_id: match.params.conversationId,
                    profile_id: currentProfileId
                })
                break;
            case "Cancel":
                booking.status = "canceled"
                createMessage({ 
                    body: `request canceled the request for ${host.username} ${start} -> ${end}`,
                    conversation_id: match.params.conversationId,
                    profile_id: currentProfileId
                })
                break;
            default:
                break;
        }
        updateBooking(booking)
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
                        <ul>
                            {this.createBookings()}
                        </ul>
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