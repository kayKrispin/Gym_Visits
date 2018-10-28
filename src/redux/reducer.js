import { combineReducers } from 'redux';
import users from './reducers/users';
import { reducer as formReducer} from 'redux-form';


export default combineReducers({
    users,
    form:formReducer
});