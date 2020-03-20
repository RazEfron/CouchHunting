import React from 'react';
import ProfileIndexItem from './profile_index_item';
import SearchBox from './search_box_container';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.props.fetchSearchResults(this.props.match.params.locationId);
        this.props.fetchAllPhotos();
    }

    render() {
            
        return(
            <div className="main-profiles-feed">
                <ul>
                <SearchBox/>
                    {this.props.profiles.map((profile, idx) => <ProfileIndexItem 
                        key={idx} 
                        profile={profile}
                        photo={this.props.photos[profile.profile_photo_id]}
                        />)}
                </ul>
            </div>
        )
    }
}

export default SearchPage