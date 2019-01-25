import React from 'react';
import  HomeUserItem from './HomeUserItem';
import {deleteeSubscriber} from "../../../../actions/users";

const HomeUserList = ({
    usersList,deleteeSubscriber,
                          updateUser,
}) => (

<ul>
    {typeof usersList.map === 'function' ? (
            usersList.map((visitor, i) => {
                let lastVisit = new Date(visitor.visitedTime);
                let now = new Date();
                let timeDifference = Math.abs(now.getTime() - lastVisit.getTime()) /36e5;
                console.log('last',timeDifference )

                return  <HomeUserItem onlineOffline={timeDifference} visitor={visitor} key={visitor._id} updateUser={updateUser} deleteeSubscriber={deleteeSubscriber} />
                })
            ) : (
            null
        )}
    </ul>
);

export default HomeUserList;
