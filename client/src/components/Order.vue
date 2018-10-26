<template>
<v-container class="mt-5 container-fluid">
  <v-btn color="info" to="/Home">Cerrar Sesión
  <v-icon light>power_settings_new</v-icon>
  </v-btn>
    <h1>Menú</h1>
    <ul v-for="food in getFoodList" :key="food._id">
      <li>
        Pedido: {{food.name}} - Precio: {{food.price}} - Turno: {{food.shift}}
      </li>
    </ul>
</v-container>
</template>

<script>
import { gql } from 'apollo-boost';
export default {
  name: "Order",
  apollo: {
    getFoodList:{
      query: gql`
      query{
        getFoodList{
          _id
          name
          price
          shift
        }
      }
      `
    }
  }
};
</script>