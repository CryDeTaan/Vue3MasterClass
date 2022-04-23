<template>

  <div class="col-large push-top" v-for="thread in threads" :key="thread.id">

    <h1>{{ thread.title }}</h1>

    <p>
      By <a href="#" class="link-unstyled">{{ userById(thread.userId).name }}</a>, {{ thread.publishedAt }}.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">
        {{ Object.keys(thread.posts).length }} replies
        <!--
        by {{ thread.contributors }} contributors
        -->
      </span>
    </p>

    <div class="post-list">

      <div class="post" v-for="postId in thread.posts" :key="postId">

        <div class="user-info">
          <a href="profile.html#profile-details" class="user-name">{{ userById(postById(postId).userId).name }}</a>

          <a href="profile.html#profile-details">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>

          <!--
          <p class="desktop-only text-small">23 threads</p>

          <span class="online desktop-only">online</span>
          -->

        </div>

        <div class="post-content">
          <div>
            <p>{{ postById(postId).text }}</p>
          </div>
          <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
        </div>



        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
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
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: "PageHome",

  data() {
    return {
      threads: sourceData.threads,
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