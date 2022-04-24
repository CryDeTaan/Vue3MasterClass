<template>
  <h1>Welkom hier by die forum</h1>
  <thread-list :threads="threads" />
</template>

<script>
import sourceData from '@/data.json'
import threadList from "@/components/ThreadList";

export default {
  name: "PageHome",
  components: {
    threadList
  },


  data() {
    return {
      threads: sourceData.threads,
    }
  },

  methods: {
    //
  },
}
</script>

<style scoped>

</style>