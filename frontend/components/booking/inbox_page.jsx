import React from 'react';
import { withRouter } from 'react-router';


class Inbox extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }

    handleClick() {
        this.props.createConversation({ author_id: parseInt(this.props.author_id), receiver_id: parseInt(this.props.match.params.profileId) })
    }

    render() {
        debugger
        return (
            <div className="inbox-page">
                <button onClick={this.handleClick}>Create Conversation</button>
            </div>
        )
    }
}

export default withRouter(Inbox)