import React from 'react';
import HostingStatus from './hosting_status_preview';

class ProfilePreview extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.profile
    }

    // componentWillMount() {
    //     debugger
    //     this.props.fetchProfile(this.props.profile.id)
    // }

    render() {
        debugger
        const { hosting_status, profile_pic_url } = this.props.profile
        const { first_name, last_name } = this.props.user
        return (
            <>
                <div className="sidebar">
                    <div>
                        <img src={window.defaultPic}/>
                    </div>
                    <div className="profile-view-name">
                        <a>{`${first_name} ${last_name}`}</a>
                    </div>
                    <div className="profile-view-location">
                        <a>{`${this.props.currentLocation.city},${this.props.currentLocation.country}`}</a>
                    </div>
                    <div>
                        <HostingStatus 
                            profile={this.props.profile} 
                            loggedInId={this.props.loggedInId}
                            updateProfile={this.props.updateProfile}
                            />
                    </div>
                </div>
            </>
        )
    }
}


export default ProfilePreview;