import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import { sync } from 'vuex-router-sync';
import store from './store';
import {cookielbl} from './lib/consts';  

Vue.use(VueRouter)

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  next()
})

sync(store, router)

// Check local storage to handle refreshes
if (window.localStorage) {
  var localUserString = window.localStorage.getItem(cookielbl.authinf) || 'null'
  var localUser = JSON.parse(localUserString)
  
  if (localUser && store.state.token !== localUser.token) {
    localUser.userid = window.localStorage.getItem(cookielbl.remem)
    store.commit('SET_AUTH', localUser);
  }
}


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
