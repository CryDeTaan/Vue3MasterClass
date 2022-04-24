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

    <div class="col-full">
      <form @submit.prevent="addPost">

        <div class="form-group">
          <label for="thread_title">Title:</label>
          <input type="text" id="thread_title" class="form-input" name="title">
        </div>

        <div class="form-group">
          <label for="thread_content">Content:</label>
          <textarea v-model="newPostText" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
        </div>

        <div class="btn-group">
          <button class="btn btn-ghost">Cancel</button>
          <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
        </div>
      </form>
    </div>

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
      newPostText: ''
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
    userById(userId) {
      return this.users.find(p => p.id === userId)
    },
    addPost () {
      const postId = 'gggg' + Math.random()
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000 ),
        threadId: this.id,
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }

      this.posts.push(post)
      this.thread.posts.push(post)
      this.newPostText = ''
    }
  },
}
</script>

<style scoped>

</style>