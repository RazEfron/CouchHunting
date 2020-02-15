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
        document.getElementById('hosting-status-banner').style.display = 'block'
        setTimeout(function () { document.getElementById('hosting-status-banner').style.display = 'none' }, 3000)
            let newState = this.state
            newState.profile.hosting_status = e.target.value
            this.setState(newState);
            return this.props.handleChange(newState)
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
                                    <select value={this.state.profile.hosting_status} className="dropdown-status" onChange={this.update}>
                                        {this.state.profile.hosting_status === "accepting guests" ? (
                                            <>
                                                <option style={{color:'green'}} default value="accepting guests">accepting guests</option>
                                                <option style={{color:'red'}} value="not accepting guests">not accepting guests</option>
                                            </>
                                        )
                                        : (
                                            <>
                                                <option style={{ color: 'green'}} value="accepting guests">accepting guests</option>
                                                <option style={{ color: 'red'}} default value="not accepting guests">not accepting guests</option>
                                            </>
                                        )
                            }
                                    </select>
                                    <div id="hosting-status-banner">
                                        <h1>You updated your host status.</h1>
                                    </div>
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