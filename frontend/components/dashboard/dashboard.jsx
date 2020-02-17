import React from 'react';

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchAllUsers().then(() => this.props.receiveCurrentUser(this.props.user))
    }


    render() {
        return(
            <div>
                <h1>HI</h1>
                <button onClick={() => this.props.logout()}>Logout</button>
                {/* <div className="sidebar"> */}
                    {/* <ProfilePreview/> */}
                {/* </div> */}
                <div className="main-feed">
                    {/* <RequestItem/> */}
                    {/* <UpcomingBookings/> */}
                    {/* <LocationsIndex/> */}
                </div>

            </div>
        )
    }
}

export default DashBoard