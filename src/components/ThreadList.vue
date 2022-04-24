<template>
  <div class="col-full">

    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <a href="#">{{ thread.title }}</a>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>, {{ thread.publishedAt }}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} replies
          </p>

          <img class="avatar-medium"
               :src="userById(
                   postById(thread.lastPostId).userId
               ).avatar"
               alt="">

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(
                postById(thread.lastPostId).userId
                ).name }}</a>
            </p>
            <p class="text-xsmall text-faded">{{ postById(thread.lastPostId).publishedAt }}</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: "ThreadList",
  components: {
    //
  },

  props: {
    threads: {
      type: Array,
      required: true
    },
  },

  data() {
    return {
      posts: sourceData.posts,
      users: sourceData.users,
    }
  },

  methods: {
    postById(postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById(userId) {
      return this.users.find(p => p.id === userId)
    }
  },
}
</script>

<style scoped>

</style>