<template>
  <div class="col-full">

    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <router-link
                :to="{ name: 'ThreadShow', params: {id: thread.id }}"
            >
              {{ thread.title }}
            </router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>, <base-date :timestamp="thread.publishedAt" />.
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
            <p class="text-xsmall text-faded">
              <base-date :timestamp="postById(thread.lastPostId).publishedAt" />
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "ThreadList",

  props: {
    threads: {
      type: Array,
      required: true
    },
  },

  methods: {
    postById(postId) {
      return this.$store.state.posts.find(p => p.id === postId)
    },
    userById(userId) {
      return this.$store.state.users.find(p => p.id === userId)
    }
  },
}
</script>

<style scoped>

</style>