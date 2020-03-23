import React from 'react';
import { withRouter } from 'react-router';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            guestNum : "any", 
            kidFriendly: false,
            petFriendly: false,
            smokingAllowed: "no_pref",
            gender: "all"
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        debugger
        if (field === "kidFriendly" || field === "petFriendly") {
            return (e) =>
                this.setState({
                    [field]: e.target.checked
                });
        } else {
            return (e) => 
            this.setState({
                [field]: e.target.value
            });
        }
    }
 
    handleSubmit() {
        debugger
        const { guestNum, kidFriendly, petFriendly, smokingAllowed, gender } = this.state;
        
        let results = [];

        if (guestNum != "any") {
            results.push(`max_guest_num >= ${guestNum}`)
        }

        if (kidFriendly) {
            results.push(`kid_friendly = true`)
        }

        if (petFriendly) {
            results.push(`pet_friendly = true`)
        }

        if (smokingAllowed != "no_pref") {
            results.push(`smoking_allowed = ${smokingAllowed}`)
        }

        if (gender != "all") {
            results.push(`gender = '${gender}'`)
        }
        this.props.fetchSearchResults(this.props.match.params.locationId, results);
    }


    render() {
        debugger
        return (
            <div className="search-box-container">
                <div className="search-box-headline">
                    <h1>Filter By:</h1>
                </div>
                <div className="search-box-form-container">
                    <form onSubmit={this.handleSubmit} className="search-box-form" >
                        <div className="search-box-form-main">
                            <div className="search-box-form-select">
                                <label>Number of Guests</label>
                                <select defaultValue={this.state.guestNum} onChange={this.update('guestNum')}>
                                    <option value="any">Any</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                                <div className="search-box-checkbox">
                                    <div>
                                        <input type="checkbox"
                                        onChange={this.update('kidFriendly')}
                                        id="kid_friendly"
                                        checked={this.state.kidFriendly}
                                        />
                                        <label>Kid friendly</label>
                                    </div>
                                    <div>
                                        <input type="checkbox"
                                            onChange={this.update('petFriendly')}
                                            id="pet_friendly"
                                            checked={this.state.petFriendly}
                                            />
                                        <label>Pet friendly</label>
                                    </div>
                                </div>
                            <div className="search-box-form-select">
                                <label>Smoking Allowed</label>
                                <select defaultValue={this.state.smokingAllowed} onChange={this.update('smokingAllowed')}>
                                    <option value="no_pref">No preference</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="search-box-form-select">
                                <label>Gender</label>
                                <select defaultValue={this.state.gender} onChange={this.update('gender')}>
                                    <option value="all">All</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="search-box-button-container">
                            <button className="search-box-button">Search</button>
                        </div>
                    </form>
                </div>
                <div className="search-box-footer">
                    <h2>{`${this.props.profiles_number} hosts in ${this.props.locations[this.props.match.params.locationId] ? this.props.locations[this.props.match.params.locationId].city : ""}`}</h2>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBox);