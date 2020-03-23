import { connect } from 'react-redux';
import SearchBox from './search_box';
import { fetchSearchResults } from '../../actions/profiles_actions';


const mapStateToProps = (state) => {
    debugger
    return {
        locations: state.entities.locations ? state.entities.locations : {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchResults: (locationId, search) => dispatch(fetchSearchResults(locationId, search))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
