import React from 'react';
import ProfilePreview from './profile_preview';
import ProfileEditForm from './profile_edit_form';
import HomeEditForm from './home_edit_form';
import AboutPreview from './about_preview'
import { withRouter } from 'react-router';
import MyHomePreview from './MyHomePreview';
import MainProfilePreview from './main_profile_preview'

class ProfilePage extends React.Component {
    constructor(props) {
        //  
        super(props)
        this.state = { 
            profile: this.props.profile, 
            user: this.props.user, 
            home: this.props.home, 
            photos: this.props.allPhotos,
            activeEditTeb: 'aboutMe',
            otherProfile: this.props.otherProfile,
            otherUser: this.props.otherUser,
            otherLocation: this.props.otherLocation,
            otherHome: this.props.otherHome,
            activeMainTab: 'aboutMe'
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    componentDidMount() {
        //  
        this.props.fetchAllHomes();
        this.props.fetchAllUsers();
        this.props.fetchProfile(this.props.match.params.profileId);
        this.props.fetchAllLocations();        
        this.props.fetchAllPhotos();
    }

    componentDidUpdate() {
         
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile, user: this.props.user, home: this.props.home })
        }
        if (this.props.match.path === "/profiles/:profileId/edit" && this.props.match.params.profileId !== this.props.currentUserProfileId.toString()) {
            this.props.history.push(`/profiles/${this.props.currentUserProfileId}/edit`)
        }
    }

    handleChange(stateSlice) {
         
        this.setState(Object.assign({}, this.state, stateSlice));
        this.props.updateProfile(this.state.profile);
    }

    handleChange2(stateSlice) {
         
        this.setState(Object.assign({}, this.state, stateSlice));
        // this.props.updateProfile(this.state.profile);
    }

    clickHandler() {
         
        // this.setState(Object.assign({}, this.state, stateSlice));
        this.props.updateProfile(this.state.profile)
        this.props.updateHome(this.state.home)
    }

    render() {
         
        const profilePic = this.props.allPhotos[this.props.profile.profile_photo_id]
        return(
            <div className="profile-page">
                <ProfilePreview 
                    profile={this.state.profile} 
                    user={this.state.user}
                    otherProfile={this.props.otherProfile}
                    otherUser={this.props.otherUser}
                    fetchProfile={this.props.fetchProfile} 
                    currentLocation={this.props.currentLocation} 
                    otherLocation={this.props.otherLocation}
                    loggedInId={this.props.loggedInId}
                    updateProfile={this.props.updateProfile}
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
                                            <a onClick={() => this.setState({ activeMainTab: 'aboutMe' })}>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.setState({ activeMainTab: 'myHome' })}>
                                            My home
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.setState({ activeMainTab: 'myPhotos' })}>
                                            Photos 
                                            <span>0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>References 
                                            <span>0</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {this.props.profile.user_id === this.props.loggedInId ? (
                                        <button onClick={() => this.props.history.push(`/profiles/${this.props.currentUserProfileId}/edit`)}>Edit My Profile</button>
                                ) : (
                                    ""
                                )
                            }
                            </div>
                                
                            </div>
                            <MainProfilePreview
                                    profile={this.props.otherProfile}
                                    memberSince={this.props.memberSince.slice(0, 4)}
                                    location={this.props.otherLocation}
                                    home={this.props.otherHome}
                                    activeTab={this.state.activeMainTab}
                                    openModal={this.props.openModal}
                                    // allPhotos={this.props.allPhotos}
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
                                        <button onClick={() => this.props.history.push(`/profiles/${this.props.currentUserProfileId}/`)} className="cancel-button">Cancel</button>
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
                            )
                    }
                    {/* <div className="secondery-nav">
                        <a href="">
                            <span>

                            </span>
                        </a>
                        <a href="">
                            <span>

                            </span>
                        </a>
                        <a href="">
                            <span>

                            </span>
                        </a>
                        <a href="">
                            <span>

                            </span>
                        </a>
                    </div> */}
                </div>
            </div>
        )
    }
}


export default withRouter(ProfilePage);