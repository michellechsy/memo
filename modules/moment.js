/**
 * Created by michelle on 16-12-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var momentSchema = new Schema({
    user            : {
        type        : Schema.ObjectId,
        ref         : 'User'
    },
    content         : String,
    createdTime     : {
        type        : Date,
        required    : true,
        default     : Date.now()
    }
});


module.exports = mongoose.model('Moment', momentSchema);
