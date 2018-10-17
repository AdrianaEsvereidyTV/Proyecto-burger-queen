const { ApolloServer, gql } = require("apollo-server");
// Conecta con la base de datos
const mongoose= require("mongoose");
require("dotenv").config({path: "variables.env"}); 
//Se utiliza el método connect y se pasa
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true}

)
.then(()=> console.log("Base de datos conectada"))
.catch(error => console.log(error));
const typeDefs = gql`
 type List {
     name: String
 }

`


const server = new ApolloServer({ typeDefs });

server.listen(7070).then(({url}) => {
  console.log("Servidor funcionando", url);
});
