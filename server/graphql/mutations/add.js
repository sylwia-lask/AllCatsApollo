
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var CatType = require('../types/cat');
var CatModel = require('../../models/cat');

exports.add = {
  type: CatType.catType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }, 
    description: {
      type: GraphQLString
    }, 
    color: {
      type: new GraphQLNonNull(GraphQLString)
    }, 
    photoUrl: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const catModel = new CatModel({
      name: params.name,
      description: params.description, 
      color: params.color, 
      photoUrl: params.photoUrl,
      likes: 0
    });
    const newCat = catModel.save();
    if (!newCat) {  
      throw new Error('Error');
    }  
    return newCat
  }
}