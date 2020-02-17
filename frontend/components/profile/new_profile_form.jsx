import React from 'react';
import { withRouter } from 'react-router';

class NewProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId,
            location_id: '1',
            hosting_status: 'Not Accepting Guests',
            date_of_birth: '',
            gender: 'female',
            profile_pic_url: window.defaultPic
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchAllLocations()
        this.props.fetchAllProfiles()
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.props.createProfile(profile).then(() => this.props.history.push('/dashboard'))
    }

    renderErrors() {
        if (this.props.errors !== undefined) {
            return (
                <ul className="session-erros-list">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <div></div>
        }
    }


    render() {
        return (
                <>
                    <header>
                    </header>
                        <form onSubmit={this.handleSubmit} className="new-profile-form-container">
                        <div className="login-errors-profile-errors">
                            {this.renderErrors()}
                        </div>
                        <div className="login-form">
                            <div>
                            <label>Birthday</label>
                            <input type="date"
                                value={this.state.date_of_birth}
                                onChange={this.update('date_of_birth')}
                                className="login-input"
                                placeholder="Birthday"
                            />
                            <label>Gender</label>
                            <select defaultValue={this.state.gender} className="dropdown-locations" onChange={this.update('gender')}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <label>City</label>
                            <select className="dropdown-locations"
                                defaultValue={this.state.location_id} onChange={(e) => this.setState({
                                location_id: parseInt(e.target.value, 10)
                            })}>
                                {this.props.locations.map(location =>{
                                    return <option key={`location-${location.id}`} value={`${location.id}`}>{location.country}, {location.city}</option>
                                     })}
                            </select>
                        </div>
                            <input className="login-submit" type="submit" value="Create account" />
                        </div>
                    </form>
                </>
        );
    }
}

export default withRouter(NewProfileForm);
