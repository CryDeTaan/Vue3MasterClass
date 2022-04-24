<template>
  <div class="col-large push-top">

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

    <post-list :posts="threadPosts" />

  </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from "@/components/PostList";

export default {
  name: "PageThreadShow",

  components: {
    PostList,
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    }
  },

  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id )
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