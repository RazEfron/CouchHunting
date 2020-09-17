import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchSearchResults } from '../../actions/profiles_actions';


const mapStateToProps = (state) => {
    return {
        locations: state.entities.locations ? Object.values(state.entities.locations) : []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchSearchResults: (locationId, search) => dispatch(fetchSearchResults(locationId, search))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
