import React from 'react';
const HomeUserItem = ({
    visitor,
    name,
    deleteeSubscriber,
                          updateVisitorSubscription,
    key
}) => (
    <li key={key}>
        <span className="name"><strong>Name:</strong> {visitor.name}</span>
        <span className="surname"><strong>Surname:</strong> {visitor.surname}</span>
        <span>{visitor.numberOfTraining !== null ? (<strong>Training Left: {visitor.numberOfTraining} </strong>) : (<strong>Subscription Started: </strong>) }{visitor.numberOfTraining ? visitor.numberOfTraining.label : visitor.monthlySubscriptionStarted}</span>
        {!visitor.monthlySubscriptionStarted ?
        <button className="smal" onClick={()=>{this.updateVisitorSubscription(id,trainingNumber)}}>Update visitor subscription</button> : null}
        <button  className="smal" onClick={()=>{deleteeSubscriber(visitor._id)}}>Delete visitor</button>
    </li>
    )




export default HomeUserItem;