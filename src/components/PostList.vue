<template>
  <div class="post-list">

    <div class="post" v-for="post in posts" :key="post.id">

      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="">
        </a>

        <p class="desktop-only text-small">107 posts</p>

        <!--
        <p class="desktop-only text-small">23 threads</p>

        <span class="online desktop-only">online</span>
        -->

      </div>

      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
        </div>
        <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
      </div>



      <div class="post-date text-faded">
        <base-date :timestamp="post.publishedAt" />
      </div>
      <!--
      <div class="reactions">
        <ul>
          <li>💡</li>
          <li>❤️</li>
          <li>👎</li>
          <li>👍</li>
          <li>👌</li>
        </ul>
        <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
        <button class="btn-xsmall active-reaction"><span class="emoji">👌️</span>️ 1</button>
        <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
      </div>
      -->

    </div>

  </div>

</template>

<script>

export default {
  name: "PostList",

  props: {
    posts: {
      type: Array,
      required: true
    },
  },

  computed: {
    users () {
      return this.$store.state.users
    }
  },

  methods: {
    userById(userId) {
      return this.users.find(p => p.id === userId)
    },
  },

}
</script>

<style scoped>

</style>