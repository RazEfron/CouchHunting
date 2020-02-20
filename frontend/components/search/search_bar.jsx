import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputVal: '' }
        this.handleInput = this.handleInput.bind(this);
        this.matches = this.matches.bind(this);
        this.selectName = this.selectName.bind(this);

    }

    componentDidMount() {
        this.props.fetchAllLocations()
    }

    handleInput(event) {
        debugger
        this.setState({ inputVal: event.currentTarget.value });
    }

    matches() {
        debugger
        const matches = [];
        if (this.state.inputVal.length === 0) {
            return this.props.locations;
        }
        debugger
        this.props.locations.forEach(location => {
            debugger
            const locationName = `${location.city}, ${location.country}`
            const sub = locationName.slice(0, this.state.inputVal.length);
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(location);
            }
        });
        debugger
        if (matches.length === 0) {
            matches.push('No matches');
        }
        debugger
        return matches;
    }

    selectName(event) {
        debugger
        const locationId = event.currentTarget.id;
        this.props.history.push(`/locations/${locationId}`)
    }

    render() {
        debugger
        const results = this.matches().map((result) => {
            debugger
            return (
                <li key={result.id} id={result.id} onClick={this.selectName}>{`${result.city}, ${result.country}`}</li>
            );
        });
        debugger
        return(
            <div className="search-bar-container">
                <div>
                    <a><img src="" alt="" /></a>
                <input 
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.location}
                    className="search-bar-input"
                    placeholder="Type a location (ex. city, country)"
                    />
                    </div>
                <ul>
                    {/* <ReactCSSTransitionGroup */}
                        {results}
                    {/* </ReactCSSTransitionGroup> */}
                </ul>
            </div>
        )
    }
}

export default withRouter(SearchBar);