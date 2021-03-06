const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const GymVisitorSchema = new Schema({

    name:{
        type:String,
        required:[true,'Name field is required'],
    },
    surname:{
        type:String,
        required:[true,'Surname field is required'],
    },
    birthday:{
        type:String,
    },
    subscription:{
        type:String,
    },

    numberOfTraining:{
        type:Number,
    },
    monthlySubscriptionStarted:{
        type:String
    },
    key:{
        type:String,
    },
    visitedTime:{
        type:String,
    },
    online:{
        type:Boolean,
        default:false
    },
    imageUrl:{
        type:String,
    }
    }

);


const GymVisitor = mongoose.model('gymVisitor', GymVisitorSchema);

module.exports = GymVisitor;