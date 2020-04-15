import React from 'react';
import ProfilePreview from '../profile/profile_preview'
import { withRouter } from 'react-router';

class DashBoard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: this.props.profile
        }

        this.handleChange = this.handleChange.bind(this);
        this.createBookings = this.createBookings.bind(this);
        this.createLocations = this.createLocations.bind(this);
        this.selectName = this.selectName.bind(this);
    }

    componentDidMount() {
        const { fetchSearchResults, profileId, fetchPhoto, fetchAllLocations, fetchAllConversations, fetchUserBookings } = this.props
        fetchUserBookings(profileId)
            .then(bookings => {
                let idsArray = [];
                Object.values(bookings.bookings).forEach(booking => {
                    idsArray.push(booking.traveler_id === profileId ? booking.host_id : booking.traveler_id)
                });
                idsArray.push(profileId)
                
                return fetchSearchResults("all", idsArray)
                    .then(profiles => {
                        
                        return fetchPhoto(profiles.profiles[profileId].profile_photo_id)
                    })
                    .then(photo => this.photo = photo.photo)
            })
            .then(() => fetchAllLocations())
            .then(() => fetchAllConversations(profileId))  
    }

    componentDidUpdate() {
        if (this.props.profile !== this.state.profile) {
            this.setState( { profile: this.props.profile } )
        }
    }

    handleChange(stateSlice) {
        this.setState(Object.assign({}, this.state, stateSlice));
        this.props.updateProfile(stateSlice.profile);
    }

    createBookings() {
        
        const { bookings, profileId, profiles } = this.props
        let array = [];
        Object.values(bookings).forEach(booking => {
            
            if (profiles[booking.traveler_id] === undefined || profiles[booking.host_id] === undefined) {
                return
            }
            if (new Date(booking.start_date) > Date.now()) {
                switch (booking.status) {
                    case ("approved"):

                        array.push(
                            <li key={booking.id} className="dashboard-booking-display-canceled">
                                <div>
                                    <p>
                                        {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {`${booking.host_id === profileId ? `You Approved ${profiles[booking.traveler_id].username}` : `${profiles[booking.host_id].username} Approved`} `}
                                    </p>
                                </div>
                            </li>
                        )
                        break;
                    case ("pending"):

                        array.push(
                            <li className="dashboard-booking-display-pending" key={booking.id}>
                                <div>
                                    <p>
                                        {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                    </p>
                                </div>
                                {booking.host_id === profileId ? (
                                    <div className="booking-display-pending-buttons">
                                        <div>
                                            {`Can you host ${profiles[booking.traveler_id].username}?`}
                                        </div>
                                        <div>
                                            <input className="booking-button" id={booking.id} type="submit" value="Approve" onClick={(e) => this.handleBookingUpdate(e)} />
                                            <input className="booking-button" id={booking.id} type="submit" value="Decline" onClick={(e) => this.handleBookingUpdate(e)} />
                                        </div>
                                    </div>
                                ) : (
                                        <div className="booking-display-pending-buttons">
                                            <div>
                                                {`Waiting for ${profiles[booking.host_id].username}'s reply`}
                                            </div>
                                            <div>
                                                <input className="booking-button" id={booking.id} type="submit" value="Cancel" onClick={(e) => this.handleBookingUpdate(e)} />
                                            </div>
                                        </div>
                                    )}
                            </li>
                        )
                        break;
                    case ("declined"):
                        array.push(
                            <li key={booking.id} className="dashboard-booking-display-canceled">
                                <div>
                                    <p>
                                        {`Hosting requested ${new Date(booking.start_date).toString().slice(0, 10)} -> ${new Date(booking.end_date).toString().slice(0, 10)} ${booking.num_guests} travelers `}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {`${booking.host_id === profileId ? `You Declined ${profiles[booking.traveler_id].username}` : `${profiles[booking.host_id].username}`} Declined`}
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

    createLocations() {
        const { locations } = this.props;
        let array = []
        Object.values(locations).forEach(location => {
            switch (location.city) {
                case "New York City":
                    array.push(<a id={location.id} onClick={this.selectName}>
                        <img src="https://couch-hunting-seed.s3.amazonaws.com/MG_1_1_New_York_City-1.jpg" alt="" />
                        <p>
                            New York City, NY, USA
                                    </p>
                    </a>)
                    break;
                case "Jerusalem":
                    array.push(<a id={location.id} onClick={this.selectName}>
                        <img src="https://couch-hunting-seed.s3.amazonaws.com/wsi-imageoptim-jerusalem-1712855_1920.jpg" alt="" />
                        <p>
                            Jerusalem, Israel/Palestine
                                    </p>
                    </a>)
                    break;
                case "Tel-aviv":
                    array.push(<a id={location.id} onClick={ (e) => this.selectName(e) }>
                        <img src="https://couch-hunting-seed.s3.amazonaws.com/telavivhashbacha.jpg" alt="" />
                        <p>
                            Tel Aviv, Israel
                                    </p>
                    </a>)
                    break;
            
                default:
                    break;
            }
        });
        return array
    }

    selectName(event) {
        
        const locationId = event.currentTarget.id;
        this.props.history.replace(`/locations/${locationId}`);
    }

    render() {

        return(
            <div className="profile-page">
                <ProfilePreview
                    profile={this.state.profile}
                    currentLocation={this.props.currentLocation}
                    loggedInId={this.props.profileId}
                    handleChange={this.handleChange}
                    profilePic={this.photo}
                />
                <div className="main-feed">
                    <div id="dashboard-search-container" className="secondery-navbar">
                        <div id="dashboard-search">
                            <div className="dashbord-search-header">
                                <h1>
                                    Explore the world's greatest cities with couchHunters..
                                </h1>
                            </div>
                            <div className="dashboard-search-image-container">
                                {this.createLocations()}
                            </div>
                        </div>
                    </div>
                    <div id="dashboard-bookings-container" className="secondery-navbar">
                        <div className="dashboard-bookings-header">
                            <h1>
                                Hosting and Travelling
                            </h1>
                        </div>
                        {Object.values(this.props.bookings).length !== 0 ? (
                            <ul>
                            {this.createBookings()}
                            </ul>
                            ) : (
                                <p className="no-bookings">
                                    No hosting or traveling plans yet, start hunting now!
                                </p>
                            )}
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(DashBoard)