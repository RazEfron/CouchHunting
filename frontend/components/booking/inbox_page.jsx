import React from 'react';
import { withRouter } from 'react-router';


class Inbox extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        debugger
        return (
            <div className="inbox-page">
                Hi
            </div>
        )
    }
}

export default withRouter(Inbox)