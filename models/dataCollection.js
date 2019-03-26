var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var DataSchema = new Schema
(
    {
        "postId": Number,
        "id": Number,
        "name": String,
        "email": String,
        "body": String
    }
);


module.exports= mongoose.model('data', DataSchema);