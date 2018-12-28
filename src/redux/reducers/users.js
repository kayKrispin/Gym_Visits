import { CREATE_USER, DELETE_USER, UPDATE_USER, GET_USERS,
    SEARCH_USER, USER_IS_ONLINE, USER_IS_OFFLINE,REQUEST_ERROR,REQUEST_SEND  }
    from '../../constans/actions';

const defaultState = {
    loading: false,
    users: {}
};

export default function user(state = defaultState, action = {}) {
    switch (action.type) {
        case REQUEST_SEND:
            return Object.assign({}, state, {loading: true});
        case REQUEST_ERROR:
            return Object.assign({}, state, {loading: false, error: action.err});
        case CREATE_USER:
            return  {...state, users: [...state.users, {...action.user,},]};
        case DELETE_USER:
            const removedUsers = state.users.filter(el => { return el._id != action.id});
            return Object.assign({}, state, {users: removedUsers});
        case UPDATE_USER:
            const updatedUsers = state.users.map(el => { return el._id === action.user._id ? Object.assign({}, action.user) : el });
            return Object.assign({}, state, {users: updatedUsers});
        case GET_USERS:
            return Object.assign({}, state, {users: action.users});
        case SEARCH_USER:
            return Object.assign({}, state, { users: action.users});
        default:
            return state;
    }
}