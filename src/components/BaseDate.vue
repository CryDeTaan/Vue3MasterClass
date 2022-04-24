<template>
  <span :title="humanFriendlyDateTime()">
    {{ diffForHumans() }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

export default {
  name: "BaseDate",

  props: {
    timestamp: {
      type: Number,
      required: true,
    },
  },

  methods: {
    diffForHumans() {
      return dayjs.unix(this.timestamp).fromNow()
    },
    humanFriendlyDateTime() {
      return dayjs.unix(this.timestamp).format('llll')
    }
  },
}
</script>

<style scoped>

</style>