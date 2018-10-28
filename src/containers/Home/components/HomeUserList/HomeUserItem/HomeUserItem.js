import React from 'react';
const HomeUserItem = ({
    visitor,
    name,
    deleteeSubscriber,
}) => (
    <li>
        <span className="name"><strong>Name:</strong> {visitor.name}</span>
        <span className="surname"><strong>Surname:</strong> {visitor.surname}</span>
        <span className="birthday"><strong>Key:</strong> {visitor.key}</span>
        <span>visitor.numberOfTraining ? <strong>Training Left: </strong> :<strong>Subscription Started: </strong> }{visitor.numberOfTraining ? visitor.numberOfTraining : visitor.monthlySubscriptionStarted}</span>
        {visitor.numberOfTraining ?
        <button className="smal" onClick={()=>{this.updateVisitorSubscription(id,trainingNumber)}}>Update visitor subscription</button> : null}
        <button  className="smal" onClick={()=>{deleteeSubscriber(visitor._id)}}>Delete visitor</button>
    </li>
    )




export default HomeUserItem;