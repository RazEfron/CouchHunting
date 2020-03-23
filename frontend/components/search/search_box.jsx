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
        return (e) => this.setState({
            [field]: e.target.value
        });
    }
 
    handleSubmit() {
        const { guestNum, kidFriendly, petFriendly, smokingAllowed, gender } = this.state;
        debugger
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
            results.push(`gender = ${gender}`)
        }


        this.props.fetchSearchResults(this.props.match.params.locationId, );
    }


    render() {
        debugger
        return (
            <div className="search-box-container">
                <form onSubmit={this.handleSubmit} className="search-box-form" >
                    <div>
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
                    <div>
                        <label>Smoking Allowed</label>
                        <select defaultValue={this.state.smokingAllowed} onChange={this.update('smokingAllowed')}>
                            <option value="no_pref">No preference</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div>
                        <label>Gender</label>
                        <select defaultValue={this.state.gender} onChange={this.update('gender')}>
                            <option value="all">All</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBox);