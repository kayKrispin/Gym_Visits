const express = require('express');
const GymVisitor = require('../models/visitiors');

const router = express.Router();


router.get('/gymvisitors/',function (req, res, next){
    console.log(req.body);
        GymVisitor.find({}).then(function(gymvisitors){
            res.send(gymvisitors)
        }).catch(next);
});

router.get('/gymvisitors/:id',function (req, res, next){
    GymVisitor.find({name : {$regex : req.params.id}})
    .then(function(gymvisitors){
        console.log('cmo',gymvisitors);
        res.send(gymvisitors)
    }).catch(next);
});


router.get('/checkUserIsOnline',function (req, res, next){
    GymVisitor.find({}).then(function(gymvisitors){

        const res = gymvisitors.map(gymvisitor=>{
                let lastTime = new Date(gymvisitor.visitedTime);

                lastTime.map(lastTime=>{
                    const now = new Date();
                    let timeDifference = Math.abs(now.getTime() - lastTime.getTime()) /36e5;
                    return timeDifference
                });

            return lastTime;
        });



            console.log('gymvisitors online and data', res );
    }).catch(next);
});



router.post('/gymvisitors',function (req, res, next){
    console.log(req.body)
    GymVisitor.create(req.body).then(function (gymvisitor) {
       res.send(gymvisitor);
       console.log('i got from base',gymvisitor)
    }).catch(next);
});


router.put('/gymvisitors/:id',function (req, res, next){
    GymVisitor.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        GymVisitor.findOne({_id: req.params.id}).then(function (gymvisitor) {
            res.send(gymvisitor)
        });
    });
});


router.delete('/gymvisitors/:id',function (req, res, next){
    GymVisitor.findByIdAndRemove({_id:req.params.id}).then(function(gymvisitor){
       console.log(gymvisitor);
    });
    res.send({ kaec:'DELETE' })
});

module.exports = router;