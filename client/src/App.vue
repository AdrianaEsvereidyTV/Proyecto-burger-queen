<template>
  <div id="app">
    <h1>holaa</h1>
    <v-toolbar fixed color = "primary" dark>
      <!-- App title -->
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">
          BuergerQueen
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
      <router-view/>
    </main>
    
  </div>
</template>

<script>
export default {
  name:'App',
  computed:{
    horizontalNavItem(){
      return[
        {icon:'create', title: 'Registrar', link:'/signup'},
        {icon: 'lock_open', title: 'Iniciar Sesión', link:'/signin'}
      ]
    }
  }
}
</script><template>
  <div id="app">
    <h1>holaa</h1>
    <v-toolbar fixed color = "primary" dark>
      <!-- App title -->
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">
          Buerger Queen
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Horizontal NavBar Links -->
       <center>
    <img src="http://img.fenixzone.net/i/85DRokL.png" class="mx-auto d-block img-fluid">
    </center>
      <v-toolbar-items>
        <v-btn flat v-for="item in horizontalNavItem" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- App content -->
    <main>
      <router-view/>
    </main>
    
  </div>
</template>

<script>
export default {
  name:'App',
  computed:{
    horizontalNavItem(){
      return[
        {icon:'create', title: 'Registrar', link:'/signup'},
        {icon: 'lock_open', title: 'Iniciar Sesión', link:'/signin'}
      ]
    }
  }
}
</script>