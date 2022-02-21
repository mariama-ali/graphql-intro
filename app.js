const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema/schema')
const mongoose = require('mongoose');

//database
mongoose.connect("mongodb+srv://dbUser:XPa55hIJk9TUG3oY@cluster85.kspyz.mongodb.net/graphql-intro?retryWrites=true&w=majority")
mongoose.connection.once('open', ()=>{
  console.log("connected to database")
})

//middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


const port = process.env.PORT || 5555

app.listen(port, ()=>{
console.log(`server is up and listening on port ${port}`);
});