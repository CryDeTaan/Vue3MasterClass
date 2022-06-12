import { createStore } from "vuex";
import sourceData from '@/data.json'

export default createStore({
    state: {
        ...sourceData,
        authId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2' // Temp
    },
    getters: {
        authUser: state => {
            const user = state.users.find(user => user.id === state.authId)
            if (!user) return null

            return {
                ...user,
                get posts() {
                    return state.posts.filter(post => post.userId === user.id)
                },
                get postsCount() {
                    return this.posts.length
                },
                get threads() {
                    return state.posts.filter(post => post.userId === user.id)
                },
                get threadsCount() {
                    return this.threads.length
                }
            }
        }
    },
    actions: {
        createPost (context, post) {
            post.id = 'gggg' + Math.random() // Temp
            context.commit('SET_POST', { post })
            context.commit('APPEND_POST_TO_THREAD', { postId:post.id, threadId: post.threadId })
        }
    },
    mutations: {
        SET_POST (state, { post }) {
            state.posts.push(post)
        },
        APPEND_POST_TO_THREAD (state, { postId, threadId }) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId)
        }
    }
})