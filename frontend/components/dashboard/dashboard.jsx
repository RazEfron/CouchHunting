import React from 'react';
import ProfilePreview from '../profile/profile_preview'

class DashBoard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
         
    }


    render() {
        return(
            <div>
                {/* <ProfilePreview
                    profile={this.state.profile}
                    currentLocation={this.props.currentLocation}
                    loggedInId={this.props.loggedInId}
                    handleChange={this.handleChange}
                    profilePic={profilePic}
                /> */}
                <div className="main-feed">
                </div>

            </div>
        )
    }
}

export default DashBoard