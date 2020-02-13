import React from 'react';
import ProfilePreview from './profile_preview';
import { withRouter } from 'react-router';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { profile: this.props.profile, user: this.props.user }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchAllUsers();
        this.props.fetchProfile(this.props.match.params.profileId);
        this.props.fetchAllLocations();        
    }

    componentDidUpdate() {
        debugger
        if (this.props.profile.location_id !== this.state.profile.location_id) {
            this.setState({ profile: this.props.profile, user: this.props.user })
        }
    }

    handleChange(new_status) {
        debugger
        // e.preventDefault();
        this.setState({ hosting_status: new_status });
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
                    <div className="secondery-nav">
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
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(ProfilePage);