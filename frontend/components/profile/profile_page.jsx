import React from 'react';
import ProfilePreview from './profile_preview';
import ProfileEditForm from './profile_edit_form';
import HomeEditForm from './home_edit_form';
import AboutPreview from './about_preview'
import { withRouter } from 'react-router';

class ProfilePage extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = { 
            profile: this.props.profile, 
            user: this.props.user, 
            home: this.props.home, 
            activeEditTeb: 'aboutMe',
            otherProfile: this.props.otherProfile,
            otherUser: this.props.otherUser,
            otherLocation: this.props.otherLocation,
            otherHome: this.props.otherHome
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchAllHomes();
        this.props.fetchAllUsers();
        this.props.fetchProfile(this.props.match.params.profileId);
        this.props.fetchAllLocations();        
    }

    componentDidUpdate() {
        debugger
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile, user: this.props.user, home: this.props.home })
        }
        if (this.props.match.path === "/profiles/:profileId/edit" && this.props.match.params.profileId !== this.props.currentUserProfileId.toString()) {
            this.props.history.push(`/profiles/${this.props.currentUserProfileId}/edit`)
        }
    }

    handleChange(stateSlice) {
        debugger
        this.setState(Object.assign({}, this.state, stateSlice));
        this.props.updateProfile(this.state.profile);
    }

    handleChange2(stateSlice) {
        debugger
        this.setState(Object.assign({}, this.state, stateSlice));
        // this.props.updateProfile(this.state.profile);
    }

    clickHandler() {
        debugger
        // this.setState(Object.assign({}, this.state, stateSlice));
        this.props.updateProfile(this.state.profile)
        this.props.updateHome(this.state.home)
    }

    render() {
        debugger
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
                    />
                <div className="main-feed">
                    {this.props.match.path === "/profiles/:profileId" ? (
                        <>
                        <div className="secondery-navbar">
                            <div>
                                <ul className="secondery-navbar-clickers">
                                    <li>
                                        <a>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            My home
                                        </a>
                                    </li>
                                    <li>
                                        <a>Photos 
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
                                    <button>Edit My Profile</button>
                                ) : (
                                    ""
                                )
                            }
                            </div>
                            {/* switch (key) {
                                case value:
                                    
                                    break;
                            
                                default:
                                    break;
                            } */}
                        </div>
                            <AboutPreview
                                profile={this.props.profile}
                                memberSince={this.props.memberSince.slice(0, 4)}
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