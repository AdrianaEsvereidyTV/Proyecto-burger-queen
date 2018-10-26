<template>
  <div id="app">
    <v-toolbar fixed color = "primary" dark>
      <!-- App title -->
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">
          Burger Queen
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <!-- Horizontal NavBar Links -->
      <v-toolbar-items>
        <v-btn flat v-for="item in horizontalNavItem" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
     <!-- App content -->
    <main>
      <v-container class="fluid mt-5">
        <router-view></router-view>

      </v-container>
      
    </main>
    
  </div>
</template>

<script>
export default {
  name: "App",
  computed:{
    horizontalNavItem(){
      return[
        {icon:'person_add', title: 'Registro', link:'/signup'},
        {icon: 'perm_identity', title: 'Iniciar Sesión', link:'/signin'}
      ]
    }
  }
};
</script>

<style>
</style>