var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var CatType = require('../types/cat');
var CatModel = require('../../models/cat');

exports.remove = {
  type: CatType.catType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedcat = CatModel.findByIdAndRemove(params.id).exec();
    if (!removedcat) {
      throw new Error('Error')
    }
    return removedcat;
  }
}
