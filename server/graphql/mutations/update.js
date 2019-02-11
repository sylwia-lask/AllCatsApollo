var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var CatType = require('../types/cat');
var CatModel = require('../../models/cat');

exports.update = {
  type: CatType.catType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    color: {
      type: new GraphQLNonNull(GraphQLString),
    },
    photoUrl: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return CatModel.findByIdAndUpdate(
      params.id,
      {
        $set: {
          name: params.name, 
          description: params.description,
          color: params.color, 
          photoUrl: params.photoUrl
        }
      },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

