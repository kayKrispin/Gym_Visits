const express = require('express');
const GymVisitor = require('../models/visitiors');
const JSON_PROFILE = require('../../src/descriptors/visiters.json');
const router = express.Router();
const fs = require('fs');



router.get('/gymvisitors/',function (req, res, next){
        GymVisitor.find({}).then(function(gymvisitors){
            res.send(gymvisitors)
        }).catch(next);
});

router.get('/gymvisitors/:id',function (req, res, next){
    GymVisitor.find({name : {$regex : req.params.id}})
    .then(function(gymvisitors){
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
    });
    res.send({ kaec:'DELETE' })
});


router.post('/gymvisitors/faces',function (req, res, next){
    console.log('faces',req.body);
    fs.writeFile('src/descriptors/newVisitors.json',  JSON.stringify(req.body))
});

module.exports = router;