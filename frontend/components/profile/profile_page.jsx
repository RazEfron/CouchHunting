import React from 'react';
import ProfilePreview from './profile_preview';
import ProfileEditForm from './profile_edit_form';
import HomeEditForm from './home_edit_form';
import { withRouter } from 'react-router';

class ProfilePage extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = { profile: this.props.profile, user: this.props.user, home: this.props.home }
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
                            <>
                                <div className="profile-edit-header">
                                    <div>
                                        <a>About</a>
                                        <a>My home</a>
                                    </div>
                                    <div>
                                        <button onClick={this.clickHandler} id="save-button">Save</button>
                                        <button className="cancel-button">Cancel</button>
                                    </div>
                                </div>
                                {/* <ProfileEditForm 
                                    profile={this.state.profile} 
                                    locations={this.props.locations}
                                    handleChange={this.handleChange2}
                                    /> */}
                                <HomeEditForm
                                    home={this.props.home}
                                    handleChange={this.handleChange2}
                                    />
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