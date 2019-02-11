
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;

var CatModel = require('../../models/cat');
var catType = require('../types/cat').catType;

exports.cat = {
    type: catType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve(root, params) {
      return CatModel.findById(
        params.id
      )
        .catch(err => new Error(err));
    }
  }

