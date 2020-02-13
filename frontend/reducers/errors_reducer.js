import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import usersErrorsReducer from './users_errors_reducer'
import profilesErrorsReducer from './profiles_errors_reducer'

export default combineReducers({
    session: sessionErrorsReducer,
    users: usersErrorsReducer,
    profiles: profilesErrorsReducer
});
