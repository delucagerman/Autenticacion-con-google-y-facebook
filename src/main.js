import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { auth } from '@/firebase';

Vue.use(Vuetify);

Vue.config.productionTip = false;

auth.onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
		store.dispatch('setUsuario', user);
		// ...
	}
	new Vue({
		router,
		store,
		render: (h) => h(App),
	}).$mount('#app');
});
