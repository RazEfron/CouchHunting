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
        
        const { profiles, photos } = this.props;
        return this.props.messages.map(message => {
            
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
        
        let array = [];
        Object.values(this.props.bookings).forEach(booking => {
            
            if (new Date(booking.start_date) > Date.now()) {
                
                switch (booking.status) {
                    case ("caneled"):
                        array.push(
                            <li key={booking.id}>
                            <div>
                                <span>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </span>
                            </div>
                            <div>
                                    {`${booking.host_id === this.props.currentProfileId ? `${this.props.profiles[booking.host_id].username}` :  "You"} Canceled`}
                            </div>
                        </li>
                    )
                    break;
                    case ("approved"):
                        array.push(
                            <li key={booking.id}>
                            <div>
                                <span>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </span>
                            </div>
                            <div>
                                    {`${booking.host_id === this.props.currentProfileId ? "You" : `${this.props.profiles[booking.host_id].username}`} Approved`}
                            </div>
                        </li>
                    )
                    break;
                    case ("pending"):
                        
                        array.push(
                            <li key={booking.id}>
                            <div>
                                <span>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </span>
                            </div>
                                {booking.host_id === this.props.currentProfileId ? (
                                <div>
                                    <input id={booking.id} type="submit" value="Approve" onClick={(e) => this.handleBookingUpdate(e)}/>
                                    <input id={booking.id} type="submit" value="Decline" onClick={(e) => this.handleBookingUpdate(e)}/>
                                </div>
                                ) : (
                                <div>
                                    <input id={booking.id} type="submit" value="Cancel" onClick={(e) => this.handleBookingUpdate(e)}/>
                                </div>
                                )}
                        </li>
                    )
                    break;
                    case ("declined"):
                        array.push(
                            <li key={booking.id}>
                            <div>
                                <span>
                                    {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                </span>
                            </div>
                            <div>
                                {`${booking.host_id === this.props.currentProfileId ? "You" : `${this.props.profiles[booking.host_id].username}`} Declined`}
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
        
        let booking = Object.assign({}, this.props.bookings[e.target.id])
        switch (e.target.value) {
            case "Approve":
                booking.status = "approved"
                break;
            case "Decline":
                booking.status = "declined"
                break;
            case "Cancel":
                booking.status = "canceled"
                break;
            default:
                break;
        }
        this.props.updateBooking(booking);
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