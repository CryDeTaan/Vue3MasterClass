<template>
  <div class="col-full push-top">

    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full">
    <div class="category-item">
      <div class="forum-list">
        <h2 class="list-title">Recipes</h2>

        <div class="forum-listing">
          <div class="forum-details">
            <a href="#" class="forum-name">Recipes</a>

            <p class="forum-description ">Recipes, Guides and Tips & Tricks</p>
          </div>


          <div class="threads-count">
            <p class="count text-lead">1</p> threads
          </div>

          <div class="last-thread">
            <img class="avatar" src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif" alt="">
            <div class="last-thread-details">
              <a href="#">How I grill my fish</a>
              <p class="text-xsmall">By <a href="profile.html">Charles Montgomery Burns</a>, 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-full">

    <thread-list :threads="threads"/>

  </div>

</template>

<script>
import ThreadList from "@/components/ThreadList";

export default {
  name: "PageForum",
  components: {ThreadList},
  props: {
    id: {
      type: String,
      required: true
    },
  },

  computed: {
    forum() {
      return this.$store.state.forums.find(forum => forum.id === this.id)
    },
    threads() {
      return this.$store.state.threads.filter(thread => thread.forumId === this.id)
    }
  }
}
</script>

<style scoped>

</style>