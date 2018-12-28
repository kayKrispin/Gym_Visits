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



const createUser = user => ({
    type:CREATE_USER,
    user
});

const usersFetched = users => ({
    type: GET_USERS,
    users
});

const updateUserSubscriptions = users => ({
    type:UPDATE_USER,
    users
});

const searchUser = users => ({
    type:SEARCH_USER,
    users
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

export const createSubsriptioner = credentials => dispatch => {
    let monthlySubscriptionStart = new Date().toJSON().slice(0,10).replace(/-/g,'/');

if(credentials.numberOfTraining.value === 'twelve'){
    credentials.numberOfTraining = 12;
} else if(credentials.numberOfTraining.value ==='eight'){
    credentials.numberOfTraining = 8;
}else if(credentials.numberOfTraining.value ==='monthly'){
    credentials.numberOfTraining = '';
    credentials.monthlySubscriptionStarted = monthlySubscriptionStart;
}

console.log('crendenew',credentials)
   return createGymVisitor(credentials).then(user => {
        dispatch(createUser(credentials));
    })};

export const users = () => dispatch => {
    dispatch(requestSend);
    return fetchUsers().then(users =>{dispatch(usersFetched(users))
        })
        .catch(err=>{dispatch(requestErrors(err)
        )});
};

export const searchUserByKey = key => dispatch =>
    fetchUserByKay(key).then(users => {
        console.log('user ',users);
        dispatch(searchUser(users));
    });

export const updateUser = id => dispatch =>
    updateUserSubscription(id).then(user => {
        dispatch(updateUserSubscriptions(user));
    });

export const deleteeSubscriber = id => dispatch =>
    deleteUser(id).then(user => {
        console.log('user ',id);
        dispatch(removeUser(id));
    });
