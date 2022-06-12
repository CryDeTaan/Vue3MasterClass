import {createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Forum from "@/pages/Forum";
import ThreadShow from "@/pages/ThreadShow";
import NotFound from "@/pages/NotFound";
import Category from "@/pages/Category";
import sourceData from "@/data.json";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile/',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/category/:id',
        name: 'Category',
        component: Category,
        props: true,
    },
    {
        path: '/forum/:id',
        name: 'Forum',
        component: Forum,
        props: true,
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
        beforeEnter(to, from, next) {
            // check if the thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            // if the thread exists, continue...
            if (threadExists) return next();
            // if the doesn't exist, navigate to 404 - Not found
            next({
                name: 'NotFound',
                params: { pathMatch: to.path.substring(1).split('/')},
                // preserve existing query and hash
                query: to.query,
                hash: to.hash
            })
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})