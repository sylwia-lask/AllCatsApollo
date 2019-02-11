var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var mutation = require('./mutations/index');
var query = require('./queries/index');

exports.catSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query', 
    fields: query
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})

