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

    <post-editor @save="savePost" />

  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";

export default {
  name: "PageThreadShow",

  components: {
    PostList,
    PostEditor,
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    thread () {
      return this.$store.state.threads.find(thread => thread.id === this.id)
    },
    threadPosts () {
      return this.$store.state.posts.filter(post => post.threadId === this.id )
    }
  },

  methods: {
    userById(userId) {
      return this.$store.state.users.find(p => p.id === userId)
    },
    savePost (data) {
      const post = {
        ...data.post,
        threadId: this.id
      }
      this.$store.state.posts.push(post)
      this.thread.posts.push(post.id)
    }
  },
}
</script>

<style scoped>

</style>