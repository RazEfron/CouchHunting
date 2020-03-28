import React from 'react';
import { withRouter } from 'react-router';


class ConversationItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      
    }

    render() {
        
        return (
            <li>
                <div>
                    {/* image name and location */}
                    <img src={this.props.photo}/>
                    <h1>
                        {this.props.profile.username}
                    </h1>
                    <h2>
                        {this.props.location}
                    </h2>
                </div>
                <div>
                    {/* who sent message, last message */}
                    {this.props.message}
                </div>
            </li>
        )
    }
}

export default withRouter(ConversationItem)