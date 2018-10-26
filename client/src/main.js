import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo);



// const ApolloProvider = new vueApollo({defaultClient});

export const defaultClient = new ApolloClient({
  // uri: 'http://localhost:80/graphql'
  uri: 'https://burger-queen-project-jcmoogyiim.now.sh/graphql'
});

const apolloProvider = new VueApollo({defaultClient});
Vue.config.productionTip = false;


new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')