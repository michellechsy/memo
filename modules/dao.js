/**
 * Created by michelle on 16-12-17.
 */


var User = require('./User');
var Moments = require('./Moment');

module.export.findMomentsByUserId = function (id) {
    var user = User.findById(id);
    var moments = Moments.find({username: id});

    console.log("moments: " + moments);
};