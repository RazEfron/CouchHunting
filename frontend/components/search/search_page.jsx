import React from 'react';
import ProfileIndexItem from './profile_index_item'

class SearchPage extends React.Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        this.props.fetchSearchResults(this.props.match.params.locationId);
        this.props.fetchAllUsers();
        this.props.fetchAllPhotos();
    }

    render() {
            
        return(
            <div className="main-profiles-feed">
                <ul>
                    {this.props.profiles.map((profile, idx) => <ProfileIndexItem 
                        key={idx} 
                        profile={profile}
                        user={this.props.users[profile.user_id]}
                        photo={this.props.photos[profile.profile_photo_id]}
                        />)}
                </ul>
            </div>
        )
    }
}

export default SearchPage