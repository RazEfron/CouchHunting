import React from 'react';
// import ReactDOM from 'react-dom';


class HomeEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { home: this.props.home }
        this.update = this.update.bind(this)
    }

    update(field) {
        debugger
        return (e) => {
            debugger
            if (e.target.type ==="checkbox") {
                let newState = this.state
                newState.home[field] = e.target.value
                this.props.handleChange(newState)
                
            }
            let newState = this.state
            newState.home[field] = e.target.value
            this.props.handleChange(newState)

        }
    }

    componentDidUpdate() {
        debugger
        if (this.props.home !== this.state.home) {
            this.setState({ home: this.props.home });
        }
    }
//     t.integer "max_guest_num", default: 0, null: false
//     t.boolean "last_minute_ok", default: false, null: false
// t.boolean "kid_friendly", default: false, null: false
// t.boolean "pet_friendly", default: false, null: false
// t.boolean "smoking_allowed", default: false, null: false
// t.string "sleeping_arrangments"
    render() {
        return (
            <>
                <form className="edit-form">
                    <div>
                        <label>Request Preferences</label>
                        <div className="edit-field">
                            <input type="checkbox"
                                value={this.state.home.last_minute_ok}
                                onChange={this.update('last_minute_ok')}
                                id="last_minute_ok"
                                checked={this.state.home.last_minute_ok ? "on" : "off"}
                                />
                                <label>Last-Minute Requests Okay</label>
                        </div>
                    </div>
                    {/* <div>
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
                                {Array.from(Array(15).keys()).map(number => {
                                    if (number === 0) {
                                        return <option key={`guest-${number}`} value="0">Any</option>

                                    }
                                    return <option key={`guest-${number}`} value={`${number}`}>{number}</option>
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
                    </div> */}
                </form>
            </>
        )
    }
}

export default HomeEditForm