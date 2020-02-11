import React from 'react';

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }


    render() {
        return(
            <div>
                <h1>HI</h1>
                <button onClick={() => this.props.logout()}>Logout</button>
            </div>
        )
    }
}

export default DashBoard