<template>
  <v-layout justify-center mt-5>
    <v-flex xs12 sm8 md6 xl4>
      <v-card>
        <v-card-text
          class="display-1 text-uppercase text--white text-xs-center"
          :class="registro ? 'teal accent-3' : 'pink'"
        >
          <span v-if="!registro">Ingreso</span>
          <span v-else>Registro</span>
        </v-card-text>
        <v-card-text>
          <v-btn block color="error" @click="google">
            <v-icon left dark>cloud_upload</v-icon>Google
          </v-btn>
          <v-btn block color="info" @click="facebook">
            <v-icon left dark>cloud_upload</v-icon>Facebook
          </v-btn>
        </v-card-text>
        <v-card-text>
          <v-btn v-if="!registro" block @click="registro = true">¿No tienes cuenta? Registrate aqui</v-btn>
          <v-btn v-else block @click="registro = false">¿Ya tienes cuenta? Registrate aqui</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { firebase, auth, db } from "@/firebase";
import { mapMutations } from "vuex";
import router from "@/router";
export default {
  data() {
    return {
      registro: false,
    };
  },
  methods: {
    ...mapMutations(["nuevoUsuario"]),
    facebook() {
      console.log("facebook");
      const provider = new firebase.auth.FacebookAuthProvider();

      this.ingresar(provider);
    },
    google() {
      console.log("google");
      const provider = new firebase.auth.GoogleAuthProvider();

      this.ingresar(provider);
    },
    async ingresar(provider) {
      firebase.auth().languageCode = "es";

      try {
        //ingreso usuario
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        console.log(user);

        //crear usuario
        const usuario = {
          nombre: user.displayName,
          email: user.email,
          uid: user.uid,
          foto: user.photoURL,
        };
        this.nuevoUsuario(usuario);
        // guardar en firestore
        await db.collection("usuarios").doc(usuario.uid).set({
          usuario,
        });
        console.log("Usuario guardado en DB");

        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

