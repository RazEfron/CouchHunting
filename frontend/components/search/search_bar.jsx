import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputVal: '' }
        this.handleInput = this.handleInput.bind(this);
        this.matches = this.matches.bind(this);
        this.selectName = this.selectName.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

    }

    componentDidMount() {
        this.props.fetchAllLocations()
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleInput(event) {
            
        this.setState({ inputVal: event.currentTarget.value });
    }

    handleClickOutside(event) {
            
        if (this.container.current && !this.container.current.contains(event.target)) {
            document.getElementById('searchbar-dropdown').style.display = 'none' 
        }
    };


    matches() {
            
        const matches = [];
        if (this.state.inputVal.length === 0) {
            return this.props.locations;
        }
            
        this.props.locations.forEach(location => {
                
            const locationName = `${location.city}, ${location.country}`
            const sub = locationName.slice(0, this.state.inputVal.length);
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(location);
            }
        });
            
        if (matches.length === 0) {
            matches.push('No matches');
        }
            
        return matches;
    }

    selectName(event) {
        debugger
        const locationId = event.currentTarget.id;
        this.props.history.replace(`/locations/${locationId}`)
        this.props.fetchSearchResults(locationId)
        .then(() => document.getElementById('searchbar-dropdown').style.display = 'none')
    }

    render() {
        this.container = React.createRef();
        // state = {
        //     open: false,
        // };
            
        const results = this.matches().map((result) => {
                
            return (
                <li 
                    key={result.id} 
                    id={result.id} 
                    onClick={this.selectName}
                    className="dropdown-items"
                    >{`${result.city}, ${result.country}`}</li>
            );
        });
            
        return(
            
            <div className="search-bar-container" ref={this.container}>
                <input 
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.location}
                    className="search-bar-input"
                    placeholder="Type a location (ex. city, country)"
                    onFocus={() => { document.getElementById('searchbar-dropdown').style.display = 'block' }}
                    // onBlur={(e) => {
                    //         
                    //      document.getElementById('searchbar-dropdown').style.display = 'none' }}
                    />
                <ul 
                    id="searchbar-dropdown"
                >
                    {/* <ReactCSSTransitionGroup */}
                        {results}
                    {/* </ReactCSSTransitionGroup> */}
                </ul>
            </div>
        )
    }
}

export default withRouter(SearchBar);