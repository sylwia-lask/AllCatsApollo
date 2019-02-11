

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt

exports.catType = new GraphQLObjectType({
  name: 'cat',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      }, 
      description: {
        type: GraphQLString
      }, 
      color: {
        type: GraphQLString
      }, 
      photoUrl: {
        type: GraphQLString
      },
      likes: {
        type: GraphQLInt
      }
    }
  }
});

