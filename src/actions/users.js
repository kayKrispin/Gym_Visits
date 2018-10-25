import {
	CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_USERS,
    SEARCH_USER,
    REQUEST_SEND,
    REQUEST_ERROR,
} from "../constans/actions";
import { fetchUsers } from "../api/users";
import { createGymVisitor } from "../api/users";
import { fetchUserByKay } from "../api/users";
import { updateUserSubscription } from "../api/users";
import { deleteUser } from "../api/users";



const createUser = credentials => ({
    type:CREATE_USER,
    credentials
});

const fetchUserss = users => ({
    type: GET_USERS,
    users
});

const updateUserSubscriptions = users => ({
    type:UPDATE_USER,
    users
});

const searchUser = user => ({
    type:SEARCH_USER,
    user
});

const removeUser = id =>({
    type:DELETE_USER,
    id
});
const requestSend = () => ({
    type: REQUEST_SEND
});

const requestErrors = err => ({
    type: REQUEST_ERROR,
    err
});

export const createSubsriptioner = credentials => dispatch =>
    createGymVisitor(credentials).then(user => {
        dispatch(createUser(user));
    });

export const users = () => dispatch => {
    dispatch(requestSend);
    fetchUsers()
        .then(users => {
            dispatch(fetchUserss(users));
        })
        .catch(err => {
            dispatch(requestErrors(err));
        });
};

export const searchUserByKey = key => dispatch =>
    fetchUserByKay(key).then(user => {
        dispatch(searchUser(user));
    });

export const updateUser = id => dispatch =>
    updateUserSubscription(id).then(user => {
        dispatch(updateUserSubscriptions(user));
    });

export const deleteeSubscriber = id => dispatch =>
    deleteUser(id).then(user => {
        dispatch(removeUser(id));
    });
