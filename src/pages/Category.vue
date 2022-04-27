<template>
  <h1>{{ category.name }}</h1>
  <forum-list
      :forums="getForumForCategory(category)"
      :category="category"
  />
</template>

<script>
import ForumList from "@/components/ForumList";

export default {
  name: "PageCategory",
  components: {
    ForumList
  },

  props: {
    id: {
      type: String,
      required: true
    },
  },

  computed: {
    category() {
      return this.$store.state.categories.find(category => category.id === this.id)
    }
  },

  methods: {
    getForumForCategory(category) {
      return this.$store.state.forums.filter(forums => forums.categoryId === category.id)
    }
  }

}
</script>

<style scoped>

</style>