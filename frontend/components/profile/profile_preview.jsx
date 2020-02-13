import React from 'react';

class ProfilePreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { location_id: '', hosting_status: '', date_of_birth: '', gender: '', occupation: '', about_me: '', profile_pic_url: '', spoken_languages: '', interests: '' },
        this.update = this.update.bind(this);
    }


    update() {
        debugger
            return this.props.handleChange(this.state.hosting_status)
        }

    componentDidUpdate() {
        debugger
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile, user: this.props.user })
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState(nextProps);
    // }


    render() {
        debugger
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
                        {
                            (this.props.profile.user_id === this.props.loggedInId) ? (
                                <div className="status-view">
                                    <h1>{this.props.profile.hosting_status}</h1>
                                    <select defaultValue={this.state.hosting_status} className="dropdown-status" onChange={this.update}>
                                        <option value="accepting guests">accepting guests</option>
                                        <option value="not accepting guests">not accepting guests</option>
                                    </select>
                                </div>
                            ) : (
                                <div>
                                    <h1>{this.props.profile.hosting_status}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}


export default ProfilePreview;