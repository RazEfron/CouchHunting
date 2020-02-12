import React from 'react';

class NewProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId,
            location_id: '',
            hosting_status: 'Not Accepting Guests',
            date_of_birth: '',
            gender: '',

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllLocations()
    }

    update(field) {
        debugger
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.props.createProfile(profile);
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
        debugger
        return (
                <>
                    <header>
                        <div className="login-errors">
                            {this.renderErrors()}
                        </div>
                    </header>
                        <form onSubmit={this.handleSubmit} className="new-profile-form-container">
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
                            <select className="dropdown-locations" value={this.state.gender} onChange={this.update('gender')}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                            <label>City</label>
                            <select className="dropdown-locations" value={this.state.location_id} onChange={(e) => this.setState({
                                location_id: parseInt(e.target.value, 10)
                            })}>
                                {this.props.locations.map(location => <option key={`location-${location.id}`} value={`${location.id}`}>{location.country}, {location.city}</option>)}
                            </select>
                        </div>
                            <input className="login-submit" type="submit" value="Create account" />
                        </div>
                    </form>
                </>
        );
    }
}

export default NewProfileForm;
