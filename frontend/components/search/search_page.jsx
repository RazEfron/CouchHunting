import React from 'react';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        this.props.fetchSearchResults(this.props.match.params.locationId);
        this.props.fetchAllUsers();
    }

    render() {
        return(
            <ul>
                {this.props.profiles.map(profile => <li>{profile.about_me}</li>)}
            </ul>
        )
    }
}

export default SearchPage