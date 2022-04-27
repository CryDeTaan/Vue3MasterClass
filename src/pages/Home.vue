<template>
  <h1 class="push-top">Welkom hier by die forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import CategoryList from "@/components/CategoryList";

export default {
  name: "PageHome",
  components: {
    CategoryList,
  },

  computed: {
    categories () {
      return this.$store.state.categories
    }
  },

  methods: {
    //
  },
}
</script>

<style scoped>

</style>