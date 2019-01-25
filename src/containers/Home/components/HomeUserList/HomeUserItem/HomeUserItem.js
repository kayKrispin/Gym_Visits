import React from 'react';
import styles from './styles.scss';
const HomeUserItem = ({
    visitor,
    name,
    deleteeSubscriber,
                          updateVisitorSubscription,
    key,
                          updateUser,
                          onlineOffline
}) => (
    <li key={key}>
       Avatar: <img style={{width:'50px',height:'50px'}} src={visitor.imageUrl || 'https://images.shazam.com/coverart/t163236075-b945659542_s400.jpg'} alt=""/>
      <div className='span-cont'>  <span  className= { onlineOffline > 0.1  ? "offline":"online"}  ><strong>Online:</strong></span>
        <span className="name"><strong>Name:</strong> {visitor.name}</span>
        <span className="surname"><strong>Surname:</strong> {visitor.surname}</span>
          <span>{visitor.numberOfTraining !== null ? (<strong>Training Left: {visitor.numberOfTraining} </strong>) : (<strong>Subscription Started: </strong>) }{visitor.numberOfTraining ? visitor.numberOfTraining.label : visitor.monthlySubscriptionStarted}</span></div>
        {!visitor.monthlySubscriptionStarted ?
        <button className="smal" onClick={()=>{updateUser(visitor._id,visitor.numberOfTraining)}}>Update visitor subscription</button> : null}
        <button  className="smal" onClick={()=>{deleteeSubscriber(visitor._id)}}>Delete visitor</button>
    </li>
    )




export default HomeUserItem;