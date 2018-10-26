const { ApolloServer, gql } = require('apollo-server')
//Conecxión con la base de datos
const moongose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });
const fs = require('fs');
const path = require ('path');

const Drink = require('./models/Drink');
const Food = require('./models/Food');
const Side = require('./models/Side');
const Extra = require('./models/Extra');
const Order = require('./models/Order');
const User = require('./models/User');
const resolvers = require('./resolvers')

const filePath = path.join(__dirname,'typeDefs.gql');

const typeDefs = fs.readFileSync(filePath, 'utf-8');

moongose
    .connect
    (process.env.MONGO_URI,
    { useNewUrlParser: true }
    )
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        Drink,
        Food,
        User,
        Order,
        Side,
        Extra
    }
});


//Levantando el servidor
server.listen({port: process.env.PORT ||4000}).then(({ url }) => {
    console.log('Servidor activo', url);
}).catch((error) => {
    console.log('error');
})