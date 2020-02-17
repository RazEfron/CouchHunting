import React from 'react';
// import ReactDOM from 'react-dom';


class HomeEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { home: this.props.home }
        this.update = this.update.bind(this)
    }

    update(field) {
         
        return (e) => {
             
            if (e.target.type ==="checkbox") {
                let newState = this.state
                newState.home[field] = e.target.checked
                this.props.handleChange(newState)
                
            } else {
                 
            let newState = this.state
            newState.home[field] = e.target.value
            this.props.handleChange(newState)
            }
        }
    }

    componentDidUpdate() {
         
        if (this.props.home !== this.state.home) {
            this.setState({ home: this.props.home });
        }
    }


    render() {
        return (
            <>
                <form className="edit-form">
                    <div>
                        <label>Request Preferences</label>
                        <div className="checkbox-field">
                            <div>

                            <input type="checkbox"
                                onChange={this.update('last_minute_ok')}
                                id="last_minute_ok"
                                checked={this.state.home.last_minute_ok}
                                />
                                <label>Last-Minute Requests Okay</label>
                                </div>
                        </div>
                    </div>
                    <div>
                        <label>Children, Pets, Smoking</label>
                        <div className="checkbox-field">
                            <div>
                                <input type="checkbox"
                                    onChange={this.update('kid_friendly')}
                                    id="kid_friendly"
                                    checked={this.state.home.kid_friendly}
                                    />
                                <label>Kid friendly</label>
                            </div>
                            <div>
                                <input type="checkbox"
                                    onChange={this.update('pet_friendly')}
                                    id="pet_friendly"
                                    checked={this.state.home.pet_friendly}
                                    />
                                <label>Pet friendly</label>
                             </div>
                            <div>
                                <input type="checkbox"
                                    onChange={this.update('smoking_allowed')}
                                    id="smoking_allowed"
                                    checked={this.state.home.smoking_allowed}
                                />
                                <label>Smoking allowed</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Sleeping arrangments</label>
                        <div className="edit-field">
                            <select value={this.state.home.sleeping_arrangments} onChange={this.update('sleeping_arrangments')}>
                                <option value="Shared Bed">Shared Bed</option>
                                <option value="Shared Room">Shared Room</option>
                                <option value="Public Room">Public Room (Eg: Living Room)</option>
                                <option value="Private Room">Private Room</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Description of Sleeping Arrangement</label>
                        <textarea
                            value={this.state.home.sleeping_arrangment_descreption}
                            onChange={this.update('sleeping_arrangment_descreption')}
                        />
                    </div>
                    <div>
                        <label>Additional Information</label>
                        <textarea
                            value={this.state.home.additional_information}
                            onChange={this.update('additional_information')}
                        />
                    </div>
                </form>
            </>
        )
    }
}

export default HomeEditForm