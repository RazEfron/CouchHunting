import React from 'react';

class ProfilePreview extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = { profile: this.props.profile, user: this.props.user }
        this.update = this.update.bind(this);
    }


    update(e) {
        // debugger
            return this.props.handleChange(e.target.value)
        }

    componentDidUpdate() {
        // debugger
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile, user: this.props.user });
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState(nextProps);
    // }


    render() {
        // debugger
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
                                    <h1>{this.state.profile.hosting_status}</h1>
                                    <select value={this.state.profile.hosting_status} className="dropdown-status" onChange={this.update}>
                                        {this.state.profile.hosting_status === "accepting guests" ? (
                                            <>
                                            <option default value="accepting guests">accepting guests</option>
                                            <option value="not accepting guests">not accepting guests</option>
                                            </>
                                        )
                                        : (
                                            <>
                                            <option value="accepting guests">accepting guests</option>
                                            <option default value="not accepting guests">not accepting guests</option>
                                            </>
                                        )
                            }
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