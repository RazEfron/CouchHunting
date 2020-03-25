import { combineReducers } from 'redux';

import users from './users_reducer';
import profiles from './profiles_reducer'
import locations from './locations_reducer'
import homes from './homes_reducer';
import photos from './photos_reducer';
import conversations from './conversations_reducer';
import messages from './messages_reducer';

export default combineReducers({
    users,
    profiles,
    homes,
    photos,
    locations,
    conversations,
    messages
});
