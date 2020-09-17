import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileIndexItem extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <a onClick={() => this.props.history.push(`/profiles/${this.props.profile.id}`)}>
                <li >
                    <div className="profile-index-item-content">
                        {this.props.photo ? <img  src={this.props.photo.photoUrl} alt=""/> : '' }
                        <div>
                            {this.props.profile ? <h1>{this.props.profile.username}</h1> : ''}
                        </div>
                        <div>
                            {this.props.profile && this.props.profile.about_me ? <p>{this.props.profile.about_me.length > 280 ? `${this.props.profile.about_me.slice(0, 280)}...` : this.props.profile.about_me}</p> : '' }
                        </div>
                    </div>
                </li>
            </a>
        )
    }
}

export default withRouter(ProfileIndexItem);