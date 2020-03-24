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
    }

    componentDidMount() {
        debugger
        this.props.fetchProfile(this.props.profileId)
            .then(profile => 
                this.props.fetchPhoto(profile.profile.profile_photo_id)
                .then(photo => this.photo = photo.photo)
            )
            .then(() => this.props.fetchAllLocations())
            debugger
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


    render() {
        debugger
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
                    <div className="secondery-navbar">fjlkdsf</div>
                </div>

            </div>
        )
    }
}

export default withRouter(DashBoard)