import React from 'react';
import ProfilePreview from './profile_preview';
import ProfileEditForm from './profile_edit_form';
import HomeEditForm from './home_edit_form';
import { withRouter } from 'react-router';
import MainProfilePreview from './main_profile_preview';
import MessageForm from '../booking/message_form';
import Modal from '../modal'

class ProfilePage extends React.Component {
    constructor(props) {
        //  
        super(props)
        this.state = { 
            profile: this.props.profile, 
            home: this.props.home, 
            photos: this.props.allPhotos,
            activeEditTeb: 'aboutMe',
            profile: this.props.profile,
            currentLocation: this.props.currentLocation,
            home: this.props.home,
            activeMainTab: 'aboutMe'
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleMessageClick = this.handleMessageClick.bind(this);
        this.handleBookingClick = this.handleBookingClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProfile(this.props.match.params.profileId)
            .then(profile => this.props.fetchHome(profile.profile.home_id))
        this.props.fetchAllLocations();        
        this.props.fetchAllPhotos();
    }

    componentDidUpdate() {
         
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile, user: this.props.user, home: this.props.home })
        }
        if (this.props.match.path === "/profiles/:profileId/edit" && this.props.match.params.profileId !== this.props.loggedInId.toString()) {
            this.props.history.push(`/profiles/${this.props.loggedInId}/edit`)
        }
    }

    handleChange(stateSlice) {
        this.setState(Object.assign({}, this.state, stateSlice));
        this.props.updateProfile(stateSlice.profile);
    }

    handleChange2(stateSlice) {
        this.setState(Object.assign({}, this.state, stateSlice));
    }

    clickHandler() {
        this.props.updateProfile(this.state.profile)
        this.props.updateHome(this.state.home)
        this.props.history.push(`/profiles/${this.props.loggedInId}/`)
    }

    handleMessageClick() {
        this.props.openModal('message')
    }

    handleBookingClick() {
        this.props.openModal('booking')
    }

    render() {
        const profilePic = this.props.allPhotos[this.props.profile.profile_photo_id]
        return(
            <div className="profile-page">
                <ProfilePreview 
                    profile={this.state.profile} 
                    currentLocation={this.props.currentLocation} 
                    loggedInId={this.props.loggedInId}
                    handleChange={this.handleChange}
                    profilePic={profilePic}
                    />
                <div className="main-feed">
                    {this.props.match.path === "/profiles/:profileId" ? (
                        <>
                        <div className="secondery-navbar">
                            <div>
                                <ul className="secondery-navbar-clickers">
                                    <li>
                                            <a className="secondery-navbar-links" onClick={() => this.setState({ activeMainTab: 'aboutMe' })}>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a className="secondery-navbar-links" onClick={() => this.setState({ activeMainTab: 'myHome' })}>
                                            My home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="secondery-navbar-links" onClick={() => this.setState({ activeMainTab: 'myPhotos' })}>
                                            Photos 
                                            <span>{this.props.profile.photoids ? this.props.profile.photoids.length : ''}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="secondery-navbar-links">References 
                                            <span>0</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                    {parseInt(this.props.match.params.profileId, 10) === this.props.loggedInId ? (
                                        <button onClick={() => this.props.history.push(`/profiles/${this.props.loggedInId}/edit`)}>Edit My Profile</button>
                                ) : (
                                    <div>
                                        <button class="message-button-profile-page" onClick={this.handleMessageClick}>Message</button>
                                        <button class="message-button-profile-page" onClick={this.handleBookingClick}>Send Request</button>
                                    </div>
                                )
                            }
                            </div>
                                
                            </div>
                            <MainProfilePreview
                                    profile={this.props.profile}
                                    memberSince={this.props.memberSince.slice(0, 4)}
                                    location={this.props.currentLocation}
                                    home={this.props.home}
                                    loggedInId={this.props.loggedInId}
                                    activeTab={this.state.activeMainTab}
                                    openModal={this.props.openModal}
                            />
                        </>
                        ) : (
                            <>
                                <div className="profile-edit-header">
                                    <div>
                                        <a onClick={() => this.setState({ activeEditTeb: 'aboutMe'})}>About</a>
                                        <a onClick={() => this.setState({ activeEditTeb: 'myHome' })}>My home</a>
                                    </div>
                                    <div>
                                        <button onClick={this.clickHandler} id="save-button">Save</button>
                                        <button onClick={() => this.props.history.push(`/profiles/${this.props.loggedInId}/`)} className="cancel-button">Cancel</button>
                                    </div>
                                </div>
                                {this.state.activeEditTeb === 'aboutMe' ? (
                                    <ProfileEditForm
                                        profile={this.state.profile}
                                        locations={this.props.locations}
                                        handleChange={this.handleChange2}
                                    />
                                ) : (
                                        <HomeEditForm
                                            home={this.props.home}
                                            handleChange={this.handleChange2}
                                        />
                                )}
                                
                            </>
                            )}
                    <Modal
                        profile={this.props.profile}
                        home={this.props.home}
                    />
                </div>
            </div>
        )
    }
}


export default withRouter(ProfilePage);