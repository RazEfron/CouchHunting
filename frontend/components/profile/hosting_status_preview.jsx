import React from 'react';
import { withRouter } from 'react-router'


class HostingStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.profile
        // debugger
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        debugger
        this.setState(this.props.profile)
    }

    handleChange(e) {
        // debugger
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.props.updateProfile(profile).then(() => this.setState({ hosting_status: e.target.value}) )
    }

    render() {
        // debugger
        if (this.props.profile.user_id === this.props.loggedInId) {
            return(
                <div>
                    <select defaultValue={this.state.hosting_status} className="dropdown-status" onChange={this.handleChange}>
                        <option value="accepting guests">accepting guests</option>
                        <option value="not accepting guests">not accepting guests</option>
                    </select>
                    <input type="submit" value=""/>
                </div>
            )
        } else {
            return(
                <div>
                    goodbye!!
                </div>
            )
        }
    }

}

export default withRouter(HostingStatus);