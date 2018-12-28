import React from 'react';
import  HomeUserItem from './HomeUserItem';
import {deleteeSubscriber} from "../../../../actions/users";

const HomeUserList = ({
    usersList,deleteeSubscriber
}) => (

<ul>
    {typeof usersList.map === 'function' ? (
            usersList.map((visitor, i) => {
                {console.log('visio',visitor)}
                return  <HomeUserItem visitor={visitor} key={visitor._id} deleteeSubscriber={deleteeSubscriber} />
                })
            ) : (
            null
        )}
    </ul>
);

export default HomeUserList;
