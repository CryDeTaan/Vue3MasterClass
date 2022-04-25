<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="getForumForCategory(category)"
    :category="category"
  />
</template>

<script>
import sourceData from '@/data.json'
import ForumList from "@/components/ForumList";
export default {
  name: "CategoryList",
  components: {
    ForumList
  },

  props: {
    categories: {
      type: Array,
    },
  },

  methods: {
    getForumForCategory (category) {
      return sourceData.forums.filter(forums => forums.categoryId === category.id )
    }

  }
}


</script>

<style scoped>

</style>