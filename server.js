const { ApolloServer, gql } = require("apollo-server");
// Conecta con la base de datos
const mongoose= require("mongoose");
require("dotenv").config({path: "variables.env"}); 

const fs = require("fs");
const path = require ("path");   

const Drink = require("./models/Drink");
const Food = require("./models/Food");
const Order = require("./models/Order");
const User = require("./models/User");

const filePath = path.join(__dirname, "typeDefs.gql");
console.log(filePath)
const typeDefs = fs.readFileSync(filePath,"utf-8")
 
//Se utiliza el método connect y se pasa
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true}

)
.then(()=> console.log("Base de datos conectada"))
.catch(error => console.log(error));

const server = new ApolloServer({ 
    typeDefs,
    context:{
        Drink,
        Food,
        Order,
        User
    }
 });

server.listen(7070).then(({url}) => {
  console.log("Servidor funcionando", url);
});
