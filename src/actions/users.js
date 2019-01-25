import {
	CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_USERS,
    SEARCH_USER,
    REQUEST_SEND,
    REQUEST_ERROR,
    UPDATE_FACES_DATA,
} from "../constans/actions";
import { fetchUsers } from "../api/users";
import { createGymVisitor } from "../api/users";
import { fetchUserByKay } from "../api/users";
import { updateUserSubscription } from "../api/users";
import { deleteUser } from "../api/users";
import { updateFaces } from "../api/face";




const createUser = user => ({
    type:CREATE_USER,
    user
});

const usersFetched = users => ({
    type: GET_USERS,
    users
});

const updateUserSubscriptions = user => ({
    type:UPDATE_USER,
    user
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

const updateFaceBase = updatedFaceBase => ({
   type:UPDATE_FACES_DATA,
    updatedFaceBase
});

export const createSubsriptioner = (credentials,avatar) => dispatch => {
    console.log('avata', avatar)
    let monthlySubscriptionStart = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    credentials.imageUrl = avatar;
if(credentials.numberOfTraining.value === 'twelve'){
    credentials.numberOfTraining = 12;
    credentials.monthlySubscriptionStarted = null
} else if(credentials.numberOfTraining.value ==='eight'){
    credentials.numberOfTraining = 8;
    credentials.monthlySubscriptionStarted = null;
}else if(credentials.numberOfTraining.value ==='monthly'){
    credentials.numberOfTraining = null;
    credentials.monthlySubscriptionStarted = monthlySubscriptionStart;
}

   return createGymVisitor(credentials,avatar).then(user => {
       console.log('user',user)
        dispatch(createUser(user));
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
        dispatch(searchUser(users));
    });

export const updateUser = (id, numberOftraining )=> dispatch => {
    let visitedTime = new Date();
    const credentials = {};
    credentials.numberOfTraining = numberOftraining - 1;
    credentials.visitedTime = visitedTime;
    credentials.online  = true;


    if (credentials.numberOfTraining >= 0) {
        return   updateUserSubscription(id,credentials).then(user => {
            dispatch(updateUserSubscriptions(user));
        });
    }
};

export const deleteeSubscriber = id => dispatch =>
    deleteUser(id).then(user => {
        dispatch(removeUser(id));
    });


export const updateFace = newFace => dispatch =>
     updateFaces(newFace).then(faces => {
        dispatch(updateFaceBase(faces))
     });