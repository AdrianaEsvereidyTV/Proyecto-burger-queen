<template>
  <v-container>
        <h1>Hola Mundo</h1>
    <ul v-for="food in getDrinkList" :key="food._id">
      <li>
          Nombre:{{food.name}} - Precio: {{food.price}} 
          </li>  
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";
export default {
  name: "Local",
  apollo: {
    getDrinkList: {
      query: gql`
       
      `
    }
  }
};
</script>