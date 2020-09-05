<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{name: 'home'}">
          <span>VUE</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="cerrarSesion">
        <span class="mr-2">
          Cerrar sesion
          <span class="material-icons">exit_to_app</span>
        </span>
      </v-btn>
    </v-toolbar>
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
