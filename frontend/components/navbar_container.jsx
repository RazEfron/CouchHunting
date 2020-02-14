import { connect } from 'react-redux';
import Navbar from './navbar';

const mapStateToProps = (state) => {
    // debugger
    return {
       currentProfileId: state.session.profile_id
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);