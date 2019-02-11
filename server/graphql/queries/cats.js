
var GraphQLList = require('graphql').GraphQLList;
var CatModel = require('../../models/cat');
var catType = require('../types/cat').catType;

exports.cats = {
  type: new GraphQLList(catType),
  resolve: function () {
    const cats = CatModel.find().exec()
    if (!cats) {
      throw new Error('Error')
    }
    return cats
  }  
}
