import React from 'react';
import ProfilePreview from './profile_preview'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchProfile(this.props.match.params.profileId)
    }

    render() {
        return(
            <div className="profile-page">
                <ProfilePreview />
                <div className="main-feed">
                    hey there
                </div>
            </div>
        )
    }
}


export default ProfilePage;