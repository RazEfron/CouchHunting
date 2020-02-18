import React from 'react';


class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { profile: this.props.profile }
        this.update = this.update.bind(this)
    }

    update(field) {
         
        if (field === 'location_id') {
            return (e) => {
                let newState = this.state
                newState.profile[field] = parseInt(e.target.value, 10)
                this.props.handleChange(newState)
            }
        }
        return (e) => {
            let newState = this.state
            newState.profile[field] = e.target.value
            this.props.handleChange(newState)

    }
}

    componentDidUpdate() {
         
        if (this.props.profile !== this.state.profile) {
            this.setState({ profile: this.props.profile });
        }
    }

    render() {
        return(
            <>
            <form className="edit-form">
                    <div>
                        <label>Birthday</label>
                        <div className="edit-field">

                        <input type="date"
                            value={this.state.profile.date_of_birth}
                            onChange={this.update('date_of_birth')}
                            placeholder="Birthday"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Gender</label>
                        <div className="edit-field">
                            <select value={this.state.profile.gender} onChange={this.update('gender')}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>City</label>
                        <div className="edit-field">
                            <select className="dropdown-locations"
                                value={this.state.profile.location_id} onChange={this.update('location_id')}>
                                {this.props.locations.map(location => {
                                    return <option key={`location-${location.id}`} value={`${location.id}`}>{location.country}, {location.city}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Occupation</label>
                        <div className="edit-field">
                            <input
                                type="text"
                                value={this.state.profile.occupation}
                                onChange={this.update('occupation')}
                                placeholder="Occupation"
                                />
                        </div>
                    </div>
                    <div>
                        <label>Languages I'm Fluent In</label>
                        <div className="edit-field">
                        <input
                            type="text"
                            value={this.state.profile.spoken_languages}
                            onChange={this.update('spoken_languages')}
                            placeholder="Languages"
                            />
                        </div>
                    </div>
                    <div>
                        <label>About me</label>
                        <textarea
                            value={this.state.profile.about_me}
                            onChange={this.update('about_me')}
                        />
                    </div>
                    <div>
                        <label>Interests</label>
                        <div className="edit-field">
                        <input
                            type="text"
                            value={this.state.profile.interests}
                            onChange={this.update('interests')}
                            placeholder="Interests"
                        />
                        </div>
                    </div>
            </form>
            </>
        )
    }
}

export default ProfileEditForm