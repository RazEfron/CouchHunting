import { connect } from 'react-redux';
import SearchPage from './search_page'
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchSearchResults } from '../../actions/profiles_actions';
import { fetchAllUsers } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    debugger
    return {
        locations: state.entities.locations ? Object.values(state.entities.locations) : [],
        profiles: state.entities.profiles ? Object.values(state.entities.profiles) : [],
        users: state.entities.users ? state.entities.users : {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchSearchResults: (locationId) => dispatch(fetchSearchResults(locationId)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
