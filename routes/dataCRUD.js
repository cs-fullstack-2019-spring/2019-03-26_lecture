var express = require('express');
var router = express.Router();
var DataCollection = require('../models/dataCollection');


router.get('/',(req,res)=>{
    res.render('index',{title:'CRUD APP'})
});

router.get('/getByID/:id',(req,res)=>
{
    DataCollection.find({postId:req.params.id}, (error,results)=>
    {
        if(error) res.send(error);
        else res.render('results',{IdResults:results});
    });
});

router.get('/getByEmail/:email',(req,res)=>
{
    DataCollection.find({email:req.params.email}, (error,results)=>
    {
        if(error) res.send(error);
        else res.render('results',{IdResults:results});
    });
});

router.get('/addPost/:userId/:postId/:name/:email/:body',(req,res)=>
{
    DataCollection.create(
        {
            postId:req.params.userId,
            id:req.params.postId,
            name:req.params.name,
            email:req.params.email,
            body:req.params.body
        },(errors,results)=>
    {
        if(errors) res.send(errors);
        else res.render('results',{NewPost:results});
    });
});

router.get('/deletePostByID/:id',(req,res)=>
{
    DataCollection.deleteOne(
        {
            id:req.params.id
        },(errors)=>
        {
            if(errors) res.send(errors);
            else res.render('results',{deleteString:"We Have taken care of the body"});
        });
});

router.get('/updatePostByID/:id/:body',(req,res)=>
{
    DataCollection.updateOne(
        {
            id:req.params.id
        },
        {
            body:req.params.body
        },(errors,results)=>
        {
            if(errors) res.send(errors);
            else res.render('results',{deleteString:'Post Updated'});
        });
});


module.exports = router;