import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory } from 'vue-router'

import PageHome from "@/components/PageHome";

const routes = [
    { path: '/', component: PageHome}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
