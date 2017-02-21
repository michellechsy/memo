const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var PostsSchema = new mongoose.Schema({
    id      : {
        type  : Number,
        index : { unique : true }
    },
    postedBy    : {
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'User'
    },
    content         : String,
    createdTime     : {
        type        : Date,
        required    : true,
        default     : Date.now()
    }
});

module.exports = mongoose.model('Posts', PostsSchema);
