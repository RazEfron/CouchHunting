import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.fetchOtherProfile(this.props.profile.id)
            .then((profile) => this.props.history.push(`/profiles/${this.props.profile.id}`))
    }

    render() {
            debugger
        return (
            <a onClick={this.handleClick}>
                <li >
                    <div className="profile-index-item-content">
                        {this.props.photo ? <img  src={this.props.photo.photoUrl} alt=""/> : '' }
                        <div>
                            {this.props.user ? <h1>{`${this.props.user.first_name} ${this.props.user.last_name}`}</h1> : ''}
                        </div>
                        <div>
                            {this.props.profile ? <p>{this.props.profile.about_me.length > 300 ? `${this.props.profile.about_me.slice(0, 300)}...` : this.props.profile.about_me}</p> : '' }
                        </div>
                    </div>
                </li>
            </a>
        )
    }
}

export default withRouter(ProfileIndexItem);