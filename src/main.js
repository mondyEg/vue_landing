// import Vue from 'vue'
//
import { createApp } from 'vue';
import axios from 'axios';
import './local';
import router from './router'
import App from './App.vue';


// define global rules

axios.defaults.baseURL = process.env.NODE_ENV !== "production" ? "http://localhost:2000/" : '/'
console.log(axios.defaults.baseURL)
const app = createApp(App);
app.use(router);
app.mount('#app');



