var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var CatType = require('../types/cat');
var CatModel = require('../../models/cat');

exports.incrementLikes = {
  type: CatType.catType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {

    return CatModel.findByIdAndUpdate(
      params.id,
      { $inc: { likes : 1} },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}