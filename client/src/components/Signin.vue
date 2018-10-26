<template>
  <v-container fluid text-md-center>
    <v-layout row wrpa mt-3>
      <v-flex xs12 sm8 offset-sm2>
        <v-card color="succsess">
          <v-container>
           <v-form @submit.prevent="handleSigninUser">
             <center>
              <div class="mt-4">
                <img class="img-fluid" src="https://image.ibb.co/gBCYLq/BQ-logo.png" id="icon" width="200" alt="logo-BQ"/>
              </div>
             </center>
              <v-layout row mt-3>
                <v-flex xs12>
                  <v-text-field :rules="usernameRules" prepend-icon="face" type="text" v-model="usuario" label="Usuario" required>
                  </v-text-field>
                </v-flex>
               </v-layout>  
              <v-layout row mt-3>
                <v-flex xs12>  
                  <v-text-field :rules="passwordRules" prepend-icon="lock" type="password" v-model="contrasena" label="Contraseña" required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row mt-3>
                <v-flex xs12>  
                  <v-btn color="info" to="/order">Iniciar Sesión</v-btn>
                  <p class="mt-2">¿No tienes cuenta?
                    <router-link to="/signup">Regístrate</router-link>
                  </p>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: "",
      // Validación de campos de formulario
      usernameRules: [
        // comprobar que se ingrese un string en el input
        username => !!username || "Completa este campo",
        // Nombre de usuario menor a 15 caracteres
        username =>
          username.length < 15 || "El usuario debe tener menos de 15 caracteres"
      ],
      passwordRules: [
        password => !!password || "Completa este campo",
        password =>
          password.length > 5 || "La contraseña debe tener más de 5 caracteres"
      ]
    };
  },
  methods: {
    handleSignInUser() {
      console.log("hollaaa");
      this.$store.dispatch("signinUser", {
        username: this.usuario,
        password: this.contrasena
      });
    }
  }
};
</script>
<style>
img{
  text-align: center;
  height: 200px;
}
</style>