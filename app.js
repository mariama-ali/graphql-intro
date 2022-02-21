const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema/schema')


//middleware
app.use('/graphql', graphqlHTTP({
  //schema
    schema,
    graphiql: true
}))
















const port = process.env.PORT || 5555

app.listen(port, ()=>{
console.log(`server is up and listening on port ${port}`);
});