import React from 'react';
import ProfilePreview from './profile_preview';
import { withRouter } from 'react-router';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.profile
        // this.currentLocation = this.currentLocation.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchAllUsers();
        this.props.fetchProfile(this.props.match.params.profileId);
        this.props.fetchAllLocations();
    }

    render() {
        debugger
        return(
            <div className="profile-page">
                <ProfilePreview 
                    profile={this.props.profile} 
                    user={this.props.user} 
                    fetchProfile={this.props.fetchProfile} 
                    currentLocation={this.props.currentLocation} 
                    loggedInId={this.props.loggedInId}
                    updateProfile={this.props.updateProfile}
                    />
                <div className="main-feed">
                    hey there
                </div>
            </div>
        )
    }
}


export default withRouter(ProfilePage);