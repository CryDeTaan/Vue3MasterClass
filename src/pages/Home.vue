<template>
  <h1>Welkom hier by die forum</h1>
  <forum-list :forums="forums" />
</template>

<script>
import sourceData from '@/data.json'
import ForumList from "@/components/ForumList";

export default {
  name: "PageHome",
  components: {
    ForumList
  },


  data() {
    return {
      forums: sourceData.forums,
    }
  },

  methods: {
    //
  },
}
</script>

<style scoped>

</style>