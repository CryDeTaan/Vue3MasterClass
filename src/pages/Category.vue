<template>
  <h1>{{ category.name }}</h1>
  <forum-list
      :forums="getForumForCategory(category)"
      :category="category"
  />
</template>

<script>
import ForumList from "@/components/ForumList";
import sourceData from "@/data.json";

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
      return sourceData.categories.find(category => category.id === this.id)
    }
  },

  methods: {
    getForumForCategory(category) {
      return sourceData.forums.filter(forums => forums.categoryId === category.id)
    }
  }

}
</script>

<style scoped>

</style>