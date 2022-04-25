<template>
  <h1>Welkom hier by die forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from "@/components/CategoryList";

export default {
  name: "PageHome",
  components: {
    CategoryList,
  },


  data() {
    return {
      categories: sourceData.categories,
    }
  },

  methods: {
    //
  },
}
</script>

<style scoped>

</style>