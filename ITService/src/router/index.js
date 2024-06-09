import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import Admin from '../pages/Admin.vue';
import Profile from '../pages/Profile.vue';
import ITservises from '../pages/ITservises.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/admin', name: 'admin', component: Admin },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/service', name: 'service', component: ITservises },
  ]
})

export default router
