import { createStore } from "vuex";
import sourceData from '@/data.json'

export default createStore({
    state: sourceData,
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