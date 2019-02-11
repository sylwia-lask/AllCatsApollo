var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    color: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    }
});
var Model = mongoose.model('Cat', catSchema);
module.exports = Model;
