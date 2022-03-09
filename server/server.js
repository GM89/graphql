//Fs file system
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express');


const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const db = require('./db');


const port = 9000;
const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();
app.use(cors(), bodyParser.json(), expressJwt({
  secret: jwtSecret,
  credentialsRequired: false
}));


/* el módulo fs nos permite leer el archivo graphql. Tenemos que darle formato (para que se la como string)
con el parámetro 'enconding'. Sino se leería como archivo binario, en lugar de una string 
the gql function will parse what is read from the schema.graphql.
Why all of this? schema is graphql file not a js file!
*/
//el nom de les següens variables ha de ser:typeDefs  i  revolver. Sino ApolloServer no les reconeixerà
//we need to plug the apollo server in our express applicatons
const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}));
const resolvers = require('./resolvers');
const apolloServer = new ApolloServer({typeDefs, resolvers});
apolloServer.applyMiddleware({app, path: '/graphql'});

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  const user = db.users.list().find((user) => user.email === email);
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({sub: user.id}, jwtSecret);
  res.send({token});
});

app.listen(port, () => console.info(`Server started on port ${port}`));



/* sobre Schema.graphql 
 aqui es como si crearamos la una global schema 
 class Query que tiene el [job] y luego definimos su schema a continuación 
 el signe exclmació vol dir que el valor és necessari (no vol dir unique)*/