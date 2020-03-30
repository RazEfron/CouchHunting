import React from 'react';
import { withRouter } from 'react-router';


class ConversationItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      debugger
      return null
    }

    render() {
        debugger
        return (
            <li className="conversation-item">
                <div>
                    {/* image name and location */}
                    <img src={this.props.photo.photoUrl}/>
                    <div>
                        <h1>
                            {this.props.profile.username}
                        </h1>
                        <h2>
                            <a>{`${this.props.currentLocation.city},${this.props.currentLocation.country}`}</a>
                        </h2>
                    </div>
                </div>
                    {/* who sent message, last message */}
                    {this.props.message.profile_id === parseInt(this.props.match.params.profileId, 10) ? (
                        <div>
                            <h3>
                                You sent A message to {this.props.profile.username}
                            </h3>
                            <p className="my-message">
                                <span>
                                    {this.props.message.body}
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h3>
                                {this.props.profile.username} sent you a message
                            </h3>
                            <p className="not-my-message">
                                <span>
                                    {this.props.message.body}
                                </span>
                            </p>
                        </div>
                    )}
            </li>
        )
    }
}

export default withRouter(ConversationItem)