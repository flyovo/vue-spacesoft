import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Dashboard/Home.vue';
import {
  DeviceManagement,
  AutoShutdownSettings,
  ManagingAccounts
} from '../views/HeaderContent';
import { RawData } from '../views/Content';
import Layout from '../views/Layout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/device-management',
          component: DeviceManagement
        },
        {
          path: '/auto-shutdown-settings',
          component: AutoShutdownSettings
        },
        {
          path: '/managing-accounts',
          component: ManagingAccounts
        },
        {
          path: '/raw-data',
          component: RawData
        }
      ]
    }
  ]
});

export default router;
