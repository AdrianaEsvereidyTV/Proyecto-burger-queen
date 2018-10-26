<template>
  <v-container>
    <v-btn color="info" to="/Home">Cerrar Sesión</v-btn>
        <h1>Hola Mundo</h1>
    <ul v-for="food in getFoodList" :key="food._id">
      <li>
          Nombre:{{food.name}} - Precio: {{food.price}} 
          </li>  
    </ul>
  <div id="app">
  <v-app id="inspire">
    <v-item-group>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex
            v-for="n in 2"
            :key="n"
            xs12
            md4
          >
            <v-item>
              <v-card
                slot-scope="{ active, toggle }"
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="200"
                @click.native="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="display-3 text-xs-center"
                  >
                    Active
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-item-group>
  </v-app>
</div>
</v-container> 
</template>

<script>
import { gql } from "apollo-boost";
export default {
  name: "Order",
  apollo: {
    getFoodList: {
      query: gql`
        query {
          getFoodList {
            _id
            name
            price
          }
        }
      `
    }
  }
};
</script>