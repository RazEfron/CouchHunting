import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchSearchResults } from '../../actions/profiles_actions';
import { fetchAllUsers } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    return {
        locations: state.entities.locations ? Object.values(state.entities.locations) : []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchSearchResults: (locationId) => dispatch(fetchSearchResults(locationId)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
