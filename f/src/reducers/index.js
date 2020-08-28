import {combineReducers} from 'redux';
import user from './user';
import article from './article';
import content from './content';

export default combineReducers({
    user,
    article,
    content
})