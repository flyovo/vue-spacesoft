import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.provide('$http', axios);

app.use(router).use(store).use(Antd);

app.mount('#app');
