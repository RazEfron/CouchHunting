import React from 'react';

class ProfilePreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { profile: {} }
        this.update = this.update.bind(this);
    }


    update(e) {
        
        document.getElementById('hosting-status-banner').style.display = 'block';
        setTimeout(function () { document.getElementById('hosting-status-banner').style.display = 'none' }, 3000);
            let newState = Object.assign({}, this.state.profile);
            newState.hosting_status = e.target.value;
            this.setState({ profile: newState });
            
            return this.props.handleChange({profile: newState});
        }

    

    componentDidUpdate() {
        
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile });
        }
    }

    render() {
        // 
        return (
            <>
                {this.props.profile.id === this.props.loggedInId ? (
                <div className="sidebar">
                    <div>
                        <img src={this.props.profilePic && this.props.profilePic.photoUrl ? this.props.profilePic.photoUrl : window.defaultPic}/>
                    </div>
                    <div className="profile-view-name">
                            <a>{this.props.profile.username}</a>
                    </div>
                    <div className="profile-view-location">
                        {this.props.currentLocation ?
                        (<a>{`${this.props.currentLocation.city},${this.props.currentLocation.country}`}</a>) :(
                            ""
                        )
                        }
                    </div>
                    <div>
                        <div className="status-view">
                                <div id="hosting-status-banner">
                                    <h1>You updated your host status.</h1>
                                </div>
                            <select value={this.state.profile.hosting_status} className="dropdown-status" onChange={this.update}>
                                {this.state.profile.hosting_status === "accepting guests" ? (
                                    <>
                                        <option style={{color:'green'}} default value="accepting guests">accepting guests</option>
                                        <option style={{color:'red'}} value="not accepting guests">not accepting guests</option>
                                    </>
                                ) : (
                                    <>
                                        <option style={{ color: 'green'}} value="accepting guests">accepting guests</option>
                                        <option style={{ color: 'red'}} default value="not accepting guests">not accepting guests</option>
                                    </>
                                )
                            }
                            </select>
                                </div>   
                            </div>
                        </div>   
                            ) : (
                        <div className="sidebar">
                            <div>
                                <img src={this.props.profilePic ? this.props.profilePic.photoUrl : window.defaultPic} />
                            </div>
                            <div className="profile-view-name">
                                <a>{this.props.profile.username}</a>
                            </div>
                            <div className="profile-view-location">
                                {this.props.currentLocation ? (
                                    <a>{`${this.props.currentLocation.city},${this.props.currentLocation.country}`}</a>
                                ) : ("")}
                            </div>
                            <div>
                                <div className="status-view">
                                    <div>
                                        <h1>{this.props.profile.hosting_status}</h1>
                                    </div>
                                    <div id="hosting-status-banner">
                                        <h1>You updated your host status</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                            )}
                            </>
        )
    }
}


export default ProfilePreview;