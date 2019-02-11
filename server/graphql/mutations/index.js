var addCat = require('./add').add;
var removeCat = require('./remove').remove;
var updateCat = require('./update').update;
var incrementLikes = require('./incrementLikes').incrementLikes;

module.exports = {
  addCat,
  removeCat,
  updateCat, 
  incrementLikes
}