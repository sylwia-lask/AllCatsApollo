const express = require("express");
const mongoose = require('./config/mongoose');
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const db = mongoose();
const app = express();
const expressPlayground = require('graphql-playground-middleware-express')
  .default

app.use('*', cors());

const catSchema = require('./graphql/index').catSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: catSchema,
  rootValue: global,
  graphiql: true
}));

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
