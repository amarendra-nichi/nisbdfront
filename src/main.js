import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
const app = createApp(App);
app.use(VueAxios,axios)
app.use(router)
app.mount('#app');
