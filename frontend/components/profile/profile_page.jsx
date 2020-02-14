import React from 'react';
import ProfilePreview from './profile_preview';
import { withRouter } from 'react-router';

class ProfilePage extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = { profile: this.props.profile, user: this.props.user }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchAllUsers();
        this.props.fetchProfile(this.props.match.params.profileId);
        this.props.fetchAllLocations();        
    }

    componentDidUpdate() {
        // debugger
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile, user: this.props.user })
        }
    }

    handleChange(new_status) {
        // debugger
        let newState = this.state
        newState.profile.hosting_status = new_status
        this.setState(newState);
        this.props.updateProfile(this.state.profile);
    }

    render() {
        debugger
        return(
            <div className="profile-page">
                <ProfilePreview 
                    profile={this.state.profile} 
                    user={this.state.user}
                    fetchProfile={this.props.fetchProfile} 
                    currentLocation={this.props.currentLocation} 
                    loggedInId={this.props.loggedInId}
                    updateProfile={this.props.updateProfile}
                    handleChange={this.handleChange}
                    />
                <div className="main-feed">
                    {this.props.match.path === "/profiles/:profileId" ? (
                        <div>
                            Profile Not Edit
                        </div>) : (
                                // {/* <ProfileEditForm/>
                                // <HomeEditForm/> */}
                                <div>
                                    Profile Edit
                                </div>
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