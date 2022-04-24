import {createRouter, createWebHistory } from 'vue-router'

import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import PageNotFound from "@/components/PageNotFound";
import sourceData from "@/data.json";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
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
        component: PageNotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})